import { ACTIONS } from '../Utils/actions';

const DigitButton = ({ dispatch, digit }) => {
	return (
		<button
			className='border hover:text-lightBlue p-8 text-[2rem] font-medium'
			onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
		>
			{digit}
		</button>
	);
};

export default DigitButton;