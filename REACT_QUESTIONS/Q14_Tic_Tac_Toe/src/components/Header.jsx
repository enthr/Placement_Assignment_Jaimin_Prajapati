import React, { Component } from 'react';
import { Sun, Moon, Trash2, XCircle } from 'lucide-react';

import { ThemeContext } from '../context/ThemeContext';
import { GameContext } from '../context/GameContext';

class Header extends Component {
	render() {
		return (
			<header>
				<nav className='container mx-auto py-4 px-2 h-[7.5vh]'>
					<div className='flex flex-row justify-between items-center h-full'>
						<div className='flex flex-row items-center gap-2'>
							<XCircle />
							<p className='text-2xl font-[500] hidden md:block'>Tic Tac Toe</p>
						</div>
						<div className='flex flex-row items-center gap-4'>
							<GameContext.Consumer>
								{({ resetGame }) => (
									<button className='border p-2 flex items-center gap-1' onClick={resetGame}>
										<Trash2 size={30} />
										<span>Reset</span>
									</button>
								)}
							</GameContext.Consumer>
							<ThemeContext.Consumer>
								{({ theme, toggleTheme }) => (
									<button onClick={toggleTheme} className='border p-2'>
										{theme === 'dark' ? <Moon size={30} /> : <Sun size={30} />}
									</button>
								)}
							</ThemeContext.Consumer>
						</div>
					</div>
				</nav>
				<hr />
			</header>
		);
	}
}

export default Header;