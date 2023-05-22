import React from 'react';

import { PlayerContext } from '../context/PlayerContext';

class PlayerInfoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: { name: '', playerValue: '', ai: '' }
		};
	}

	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState((prevState) => ({
			info: {
				...prevState.info,
				[name]: value
			}
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { info } = this.state;
		const { setPlayerInfo } = this.context;
		setPlayerInfo(info);
	};

	render() {
		const { info } = this.state;

		return (
			<main>
				<PlayerContext.Consumer>
					{(context) => (
						<div className='container mx-auto h-[85vh]'>
							<div className='flex flex-col justify-center items-center gap-8 h-full'>
								<h1 className='text-5xl font-bold text-center'>Player Info</h1>
								<form className='flex flex-col gap-4' onSubmit={this.handleSubmit}>
									<label htmlFor='name'>Name</label>
									<input
										className='p-2 bg-white border border-black dark:bg-black dark:border-white'
										type='text'
										id='name'
										value={info.name}
										onChange={this.handleInputChange}
                                        name='name'
									/>

									<label htmlFor='value'>Symbol Choice:</label>
									<select
										className='p-2 bg-white border border-black dark:border-white dark:bg-black'
										id='value'
										value={info.playerValue}
										onChange={this.handleInputChange}
										name='playerValue'
									>
										<option value=''>Select</option>
										<option value='X'>X</option>
										<option value='O'>O</option>
									</select>

									<label htmlFor='value'>AI Choice:</label>
									<select
										className='p-2 bg-white border border-black dark:border-white dark:bg-black'
										id='value'
										value={info.ai}
										onChange={this.handleInputChange}
										name='ai'
									>
										<option value=''>Select</option>
										<option value='random'>Easy AI</option>
										<option value='unbeatable'>Hard AI</option>
									</select>

									<button className='py-2 px-4 border border-black dark:border-white mt-4' type='submit'>
										Submit
									</button>
								</form>
							</div>
						</div>
					)}
				</PlayerContext.Consumer>
			</main>
		);
	}
}

PlayerInfoForm.contextType = PlayerContext;

export default PlayerInfoForm;