import { useReducer, useState } from 'react';
import { nanoid } from 'nanoid';
import { Plus, Power, Trash2, Edit, Send, X } from 'lucide-react';

import Modal from '../Components/Modal';
import { ACTIONS } from '../Utils/actions';

const initialState = {
	tasks: []
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TASK':
			return {
				...state,
				tasks: [...state.tasks, action.payload]
			};
		case 'DELETE_TASK':
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload)
			};
		case 'UPDATE_TASK':
			return {
				...state,
				tasks: state.tasks.map((task) => {
					if (task.id === action.payload.id) {
						return {
							...task,
							description: action.payload.description
						};
					}
					return task;
				})
			};
		case 'TOGGLE_TASK':
			return {
				...state,
				tasks: state.tasks.map((task) => {
					if (task.id === action.payload) {
						return {
							...task,
							completed: !task.completed
						};
					}
					return task;
				})
			};
		case 'RESET_APP':
			return {
				...state,
				tasks: []
			};
		default:
			return state;
	}
};

const Todo = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [addInput, setAddInput] = useState('');
	const [updateInput, setUpdateInput] = useState();
	const [toggleModal, setToggleModal] = useState({
		open: false,
		id: null
	});

	const addTask = (description) => {
		const temp = {
			type: ACTIONS.ADD_TASK,
			payload: {
				id: nanoid(),
				description: description.trim(),
				completed: false
			}
		};
		setAddInput('');
		return temp;
	};

	const deleteTask = (id) => {
		return {
			type: 'DELETE_TASK',
			payload: id
		};
	};

	const updateTask = (id, description) => {
		const temp = {
			type: ACTIONS.UPDATE_TASK,
			payload: {
				id,
				description: description.trim()
			}
		};
		setUpdateInput('');
		setToggleModal({ open: false, id: null });
		return temp;
	};

	const toggleTask = (id) => {
		return {
			type: 'TOGGLE_TASK',
			payload: id
		};
	};

	const resetApp = () => {
		return {
			type: 'RESET_APP'
		};
	};

	return (
		<main className='min-h-[90vh] bg-white text-black dark:bg-black dark:text-white py-2'>
			<section className='container mx-auto'>
				<div className='w-full flex flex-col gap-8 px-4'>
					<div className='w-full flex flex-col lg:flex-row lg:items-center gap-4 my-4'>
						<input
							type='text'
							id='addTodo'
							className='border py-2 px-4 rounded-md flex-1 dark:bg-black dark:text-white'
							value={addInput}
							placeholder='Add New Task'
							onChange={(e) => setAddInput(e.target.value)}
						/>
						<button
							className='border p-2 rounded-md bg-black text-white hover:bg-gray-200 dark:hover:bg-gray-800'
							onClick={() => dispatch(addTask(addInput))}
						>
							<span className='flex justify-center items-center'>
								<Plus size={28} />
							</span>
						</button>
						<button
							className='border p-2 rounded-md bg-black text-white hover:bg-gray-200 dark:hover:bg-gray-800'
							onClick={() => dispatch(resetApp())}
						>
							<span className='flex justify-center items-center'>
								<Power size={28} />
							</span>
						</button>
					</div>
					<div className='w-full flex flex-col gap-4'>
						{state.tasks.map((task) => {
							return (
								<div key={task.id} className='border w-full flex items-center gap-4 p-4'>
									<input
										type='checkbox'
										id='taskCompleted'
										className='py-2 px-4 rounded-md dark:bg-black dark:text-white'
										checked={task.completed}
										onChange={() => dispatch(toggleTask(task.id))}
									/>
									<p className='flex-1 text-lg'>{task.description}</p>
									<button
										className='border p-2 rounded-md bg-black text-white hover:bg-gray-200 dark:hover:bg-gray-800'
										onClick={() => setToggleModal({ open: true, id: task.id })}
									>
										<span className='flex justify-center items-center'>
											<Edit size={28} />
										</span>
									</button>
									<button
										className='border p-2 rounded-md bg-black text-white hover:bg-gray-200 dark:hover:bg-gray-800'
										onClick={() => dispatch(deleteTask(task.id))}
									>
										<span className='flex justify-center items-center'>
											<Trash2 size={28} />
										</span>
									</button>
								</div>
							);
						})}
					</div>
				</div>
				<Modal toggleModal={toggleModal}>
					<div className=' flex flex-col items-center gap-8 p-4 bg-white dark:bg-black rounded-md'>
						<div className='w-full flex justify-end'>
							<button
								className='border p-2 rounded-md bg-black text-white hover:bg-gray-200 dark:hover:bg-gray-800'
								onClick={() => setToggleModal({ open: false, id: null })}
							>
								<span className='flex justify-center items-center'>
									<X size={28} />
								</span>
							</button>
						</div>
						<div className='w-full flex flex-col gap-4'>
							<input
								type='text'
								id='taskDescription'
								className='border py-2 px-4 rounded-md dark:bg-black dark:text-white'
								value={updateInput}
								placeholder='Update Task Description'
								onChange={(e) => setUpdateInput(e.target.value)}
							/>
							<button
								className='border p-2 rounded-md bg-black text-white hover:bg-gray-200 dark:hover:bg-gray-800'
								onClick={() => dispatch(updateTask(toggleModal.id, updateInput))}
							>
								<span className='flex justify-center items-center'>
									<Send size={28} />
								</span>
							</button>
						</div>
					</div>
				</Modal>
			</section>
		</main>
	);
};

export default Todo;
