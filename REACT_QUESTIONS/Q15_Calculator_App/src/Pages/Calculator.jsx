import { useReducer } from 'react';
import { Equal } from 'lucide-react';

import { ACTIONS } from '../Utils/actions';
import DigitButton from '../Components/DigitButton';
import OperationButton from '../Components/OperationButton';

const initialState = {};

const evaluate = ({ currentOperand, previousOperand, operation }) => {
	const current = parseFloat(currentOperand);
	const previous = parseFloat(previousOperand);

	if (isNaN(current) || isNaN(previous)) return '';

	let result = '';

	switch (operation) {
		case '+':
			result = previous + current;
			break;
		case '-':
			result = previous - current;
			break;
		case '*':
			result = previous * current;
			break;
		case '/':
			result = previous / current;
			break;
	}

	return result.toString();
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.ADD_DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: payload.digit
                };
            }
			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${payload.digit}`
			};
		case ACTIONS.CLEAR:
			return {
				...state,
                overwrite: false,
				currentOperand: null
			};
		case ACTIONS.CLEAR_ALL:
			return {};
		case ACTIONS.SELECT_OPERATION:
			if (state.currentOperand == null && state.previousOperand == null) return state;

			if (state.previousOperand == null) {
				return {
					...state,
					operation: payload.operation,
					previousOperand: state.currentOperand,
					currentOperand: null
				};
			}

            if (state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation
                };
            }

			return {
				...state,
				previousOperand: evaluate(state),
				operation: payload.operation,
				currentOperand: null
			};
        case ACTIONS.COMPUTE:
            if (state.currentOperand == null || state.previousOperand == null || state.operation == null) return state;

            return {
                ...state,
                overwriting: true,
                currentOperand: evaluate(state),
                previousOperand: null,
                operation: null
            };
	}
};

const Calculator = () => {
	const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, initialState);

	return (
		<main className='bg-white text-black dark:bg-black dark:text-white'>
			<section className='container mx-auto py-10'>
				<div className='grid grid-cols-4 grid-rows-5 gap-4'>
					<div className='border p-4 col-span-4'>
						<p className='text-right text-grey text-[1.75rem] font-medium'>
							{previousOperand} {operation}
						</p>
						<p className='text-right text-[2rem] font-semibold'>{currentOperand}</p>
					</div>
					<button
						className='border hover:text-lightBlue p-8 text-[2rem] font-medium col-span-2'
						onClick={() => dispatch({ type: ACTIONS.CLEAR_ALL })}
					>
						CE
					</button>
					<button className='border hover:text-lightBlue p-8 text-[2rem] font-medium' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
						C
					</button>
					<OperationButton dispatch={dispatch} operation='/' />
					<DigitButton dispatch={dispatch} digit='1' />
					<DigitButton dispatch={dispatch} digit='2' />
					<DigitButton dispatch={dispatch} digit='3' />
					<OperationButton dispatch={dispatch} operation='*' />
					<DigitButton dispatch={dispatch} digit='4' />
					<DigitButton dispatch={dispatch} digit='5' />
					<DigitButton dispatch={dispatch} digit='6' />
					<OperationButton dispatch={dispatch} operation='+' />
					<DigitButton dispatch={dispatch} digit='7' />
					<DigitButton dispatch={dispatch} digit='8' />
					<DigitButton dispatch={dispatch} digit='9' />
					<OperationButton dispatch={dispatch} operation='-' />
					<DigitButton dispatch={dispatch} digit='.' />
					<DigitButton dispatch={dispatch} digit='0' />
					<button className='border hover:text-lightBlue p-8 col-span-2 inline-flex justify-center items-center' onClick={() => dispatch({ type: ACTIONS.COMPUTE })}>
						<Equal size={32} />
					</button>
				</div>
			</section>
		</main>
	);
};

export default Calculator;
