import { X, Plus, Minus, Divide } from 'lucide-react';

import { ACTIONS } from '../Utils/actions';

const OperationButton = ({ dispatch, operation }) => {
	return (
		<button
			className='border hover:text-lightBlue p-8 text-[2rem] inline-flex justify-center items-center'
			onClick={() => dispatch({ type: ACTIONS.SELECT_OPERATION, payload: { operation } })}
		>
			{
                (operation === '/' && <Divide size={32} />) ||
                (operation === '*' && <X size={32} />) ||
                (operation === '+' && <Plus size={32} />) ||
                (operation === '-' && <Minus size={32} />) ||
                operation
            }
		</button>
	);
};

export default OperationButton;