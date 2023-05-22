import React from 'react';
import { Minus, Circle, X } from 'lucide-react';

class Game extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			localBoard: [],
		};
	}
	
    componentDidMount() {
		this.updateLocalBoard();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.board !== this.props.board) {
			this.updateLocalBoard();
		}
	}

    updateLocalBoard() {
		const { board } = this.props;
		const iconBoard = []
        board.map(value => {
			if (value === 'X') {
				return iconBoard.push(<X size={120} />);
			} else if (value === 'O') {
				return iconBoard.push(<Circle size={120} />);
			} else if (value === '-') {
				return iconBoard.push(<Minus size={120} />);
			}
			return null;
		});
		this.setState({ localBoard: iconBoard });
	}

	render() {
        const { chooseSquare, turn } = this.props;
		const { localBoard } = this.state;
        return (
            <div className='w-full md:w-[50%]'>
                <div className='flex flex-col items-center w-full'>
                    <div className='flex justify-center items-center gap-6 border-b'>
                        <button onClick={() => chooseSquare(0, turn)}>{localBoard[0] || <Minus size={120} />}</button>
                        <button onClick={() => chooseSquare(1, turn)} className='border-x px-2'>
                            {localBoard[1] || <Minus size={120} />}
                        </button>
                        <button onClick={() => chooseSquare(2, turn)}>{localBoard[2] || <Minus size={120} />}</button>
                    </div>
                    <div className='flex justify-center items-center gap-6 border-b'>
                        <button onClick={() => chooseSquare(3, turn)}>{localBoard[3] || <Minus size={120} />}</button>
                        <button onClick={() => chooseSquare(4, turn)} className='border-x px-2'>
                            {localBoard[4] || <Minus size={120} />}
                        </button>
                        <button onClick={() => chooseSquare(5, turn)}>{localBoard[5] || <Minus size={120} />}</button>
                    </div>
                    <div className='flex justify-center items-center gap-6'>
                        <button onClick={() => chooseSquare(6, turn)}>{localBoard[6] || <Minus size={120} />}</button>
                        <button onClick={() => chooseSquare(7, turn)} className='border-x px-2'>
                            {localBoard[7] || <Minus size={120} />}
                        </button>
                        <button onClick={() => chooseSquare(8, turn)}>{localBoard[8] || <Minus size={120} />}</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Game;