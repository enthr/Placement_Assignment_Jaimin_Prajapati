import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { ThemeContext } from './context/ThemeContext';
import { PlayerContext, initialPlayer } from './context/PlayerContext';
import { GameContext, initialBoard, checkWin, checkDraw } from './context/GameContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import PlayerInfoForm from './components/PlayerInfoForm';
import { bestMove, emptyIndexes } from './utils/computerMove';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: 'light',
			player: initialPlayer,
			board: initialBoard,
			turn: '',
			gameStatus: ''
		};
	}

	toggleTheme = () => {
		this.setState((prevState) => ({
			theme: prevState.theme === 'light' ? 'dark' : 'light'
		}));
		toast.success('Theme Changed!');
	};

	setPlayerInfo = (info) => {
		const { playerValue } = info;
		const opponentValue = playerValue === 'X' ? 'O' : 'X';
		this.setState({
			player: { ...initialPlayer, ...info, opponentValue },
			turn: info.playerValue
		});
		toast.success('Player Info Entered!');
		toast.success('Game Started!');
	};

	resetGame = () => {
		this.setState({
			board: initialBoard,
			player: initialPlayer
		});
		toast.success('Game Reset!');
	};

	restartGame = () => {
		this.setState({
			board: initialBoard
		});
		toast.success('Game Restarted!');
	};

	chooseSquare = (pos, turn) => {
		pos = parseInt(pos);
		const { board, player } = this.state;
		if (board[pos] === 'X' || board[pos] === 'O') {
			toast.error('Square already taken!');
		} else if (board[pos] === '-' && (turn === player.playerValue || turn === player.opponentValue)) {
			const newBoard = [...board];
			newBoard[pos] = turn;
			this.setState({
				board: newBoard
			});
		}
	};

	changeTurn = () => {
		const { turn, player } = this.state;
		const newTurn = turn === player.playerValue ? player.opponentValue : player.playerValue;
		this.setState({
			turn: newTurn
		});
	};

	handleGameStatus = () => {
		const { board, player } = this.state;
		let winner = checkWin(board);
		let isDraw = checkDraw(winner, board);

		if (winner !== '') {
			if (winner === player.playerValue) {
				this.setState((prevState) => ({
					player: { ...prevState.player, win: prevState.player.win + 1 },
					gameStatus: `${player.name} Wins!`
				}));
			} else if (winner === player.opponentValue) {
				this.setState((prevState) => ({
					player: { ...prevState.player, lose: prevState.player.lose + 1 },
					gameStatus: 'Computer Wins!'
				}));
			}
		} else if (isDraw) {
			this.setState((prevState) => ({
				player: { ...prevState.player, draw: prevState.player.draw + 1 },
				gameStatus: 'Draw!'
			}));
		} else {
			this.setState({
				gameStatus: ''
			});
		}
	};

	handleAIMove = () => {
		const { turn, player, board } = this.state;
		if (turn === player.opponentValue && player.opponentValue !== '' && player.playerValue !== '' && this.state.gameStatus === '') {
			let aiBoard = [...board];
			let aiMove;
			if (player.ai === 'random') {
				const emptySpot = emptyIndexes(aiBoard);
				aiMove = emptySpot[Math.floor(Math.random() * emptySpot.length)];
			}
			if (player.ai === 'unbeatable') {
				const gameInfo = {
					aiBoard: aiBoard,
					playerValue: player.playerValue,
					opponentValue: player.opponentValue
				};
				aiMove = bestMove(gameInfo, turn);
			}
			this.chooseSquare(aiMove, turn);
		}
	};

	componentDidUpdate(prevProps, prevState) {
		const { theme, board, turn } = this.state;
        
		if (theme !== prevState.theme) {
			if (theme === 'dark') {
				document.body.classList.add('dark');
			} else {
				document.body.classList.remove('dark');
			}
		}

        if (prevState.turn !== turn) {
			this.handleAIMove();
		}

		if (board !== prevState.board) {
			this.handleGameStatus();
			this.changeTurn();
		}
	}

	render() {
		const { theme, player, board, turn, gameStatus } = this.state;
        const { toggleTheme, setPlayerInfo, resetGame, chooseSquare, restartGame } = this;

		return (
			<>
				<ThemeContext.Provider value={{ theme, toggleTheme }}>
					<PlayerContext.Provider value={{ player, setPlayerInfo }}>
						<GameContext.Provider value={{ board, turn, resetGame, chooseSquare, restartGame, gameStatus }}>
							<div className='h-screen w-screen bg-white text-black dark:text-white dark:bg-black'>
								<Header />
								{player.name === '' ? <PlayerInfoForm /> : <Main />}
								<Footer />
								<Toaster position='bottom-right' containerStyle={{ bottom: 64, right: 32 }} gutter={8} />
							</div>
						</GameContext.Provider>
					</PlayerContext.Provider>
				</ThemeContext.Provider>
			</>
		);
	}
}

export default App;