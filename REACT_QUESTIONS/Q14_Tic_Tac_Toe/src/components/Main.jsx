import React from 'react';

import { PlayerContext } from '../context/PlayerContext';
import { GameContext } from '../context/GameContext';
import Game from './Game';

class Main extends React.Component {
	render() {
		return (
			<main className='relative'>
				<GameContext.Consumer>
					{({ restartGame, gameStatus }) => (
						<>
							{gameStatus === '' ? null : (
								<div className='absolute w-full h-full flex flex-col justify-center items-center gap-8 bg-black dark:bg-white opacity-[0.9]'>
									<p className='text-white dark:text-black text-5xl font-bold'>{gameStatus}</p>
									<button
										className='text-white border border-white dark:text-black dark:border-black py-2 px-8'
										onClick={() => restartGame()}
									>
										Restart Game
									</button>
								</div>
							)}
						</>
					)}
				</GameContext.Consumer>
				<section className='container mx-auto h-[85vh]'>
					<div className='flex flex-col justify-around items-center h-full md:flex-row'>
						<PlayerContext.Consumer>
							{({ player }) => (
								<div className='flex flex-col gap-4'>
									<div className='flex flex-row gap-4 md:flex-col'>
										<p className='text-2xl'>{player.name || 'Player'}</p>
										<p className='text-2xl'>Choice: {player.playerValue || 'X'}</p>
									</div>
									<div className='text-2xl flex flex-row gap-4 md:flex-col'>
										<p className=''>
											Wins: <span className='text-green font-bold'>{player.win || 0}</span>
										</p>
										<p className=''>
											Losses: <span className='text-red font-bold'>{player.lose || 0}</span>
										</p>
										<p className=''>
											Draws: <span className='text-blue font-bold'>{player.draw || 0}</span>
										</p>
									</div>
								</div>
							)}
						</PlayerContext.Consumer>

						<GameContext.Consumer>
							{({ board, turn, chooseSquare }) => <Game board={board} turn={turn} chooseSquare={chooseSquare} />}
						</GameContext.Consumer>

						<PlayerContext.Consumer>
							{({ player }) => (
								<div className='flex flex-col gap-4'>
									<div className='flex flex-row gap-4 md:flex-col'>
										<p className='text-2xl'>Computer</p>
										<p className='text-2xl'>Choice: {player.opponentValue || 'O'}</p>
										<p className='text-2xl'>Mode: {player.ai === 'random' ? 'Easy AI' : 'Hard AI'}</p>
									</div>
									<div className='text-2xl flex flex-row gap-4 md:flex-col'>
										<p className=''>
											Wins: <span className='text-green font-bold'>{player.lose || 0}</span>
										</p>
										<p className=''>
											Losses: <span className='text-red font-bold'>{player.win || 0}</span>
										</p>
										<p className=''>
											Draws: <span className='text-blue font-bold'>{player.draw || 0}</span>
										</p>
									</div>
								</div>
							)}
						</PlayerContext.Consumer>
					</div>
				</section>
			</main>
		);
	}
}

export default Main;
