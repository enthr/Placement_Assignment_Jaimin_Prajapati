import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	const [incrementInput, setIncrementInput] = useState(0);
	const [decrementInput, setDecrementInput] = useState(0);

    const handleIncrementInput = (value) => {
        const input = parseInt(value);
        setIncrementInput(input);
    }

    const handleDecrementInput = (value) => {
        const input = parseInt(value);
        setDecrementInput(input);
    }

    const handleIncrement = (value) => {
        setCounter(counter + value);
        setIncrementInput(0);
    }

    const handleDecrement = (value) => {
        setCounter(counter - value);
        setDecrementInput(0);
    }

    const resetCounter = () => {
        setCounter(0);
        setIncrementInput(0);
        setDecrementInput(0);
    }
        
	return (
		<main className='min-h-[90vh] bg-white text-black dark:bg-black dark:text-white py-2'>
			<section className='container mx-auto'>
                <h1 className='text-7xl font-black my-8 border rounded-md py-4 px-8'>{counter}</h1>
				<div className='w-full flex flex-col gap-8'>
                    <div className='w-full flex items-center gap-4'>
                        <button className='flex-1 border p-2 rounded-md bg-black text-white hover:bg-gray-200 dark:hover:bg-gray-800' onClick={() => handleIncrement(1)}>
                            <span className='flex justify-center items-center'><Plus /></span>
                        </button>
                        <button className='flex-1 border p-2 rounded-md bg-black text-white hover:bg-gray-200 dark:hover:bg-gray-800' onClick={() => handleDecrement(1)}>
                            <span className='flex justify-center items-center'><Minus /></span>
                        </button>
                    </div>
                    <div className='w-full flex items-center gap-4'>
                        <input type='number' id='incrementByInput' className='border py-2 px-4 rounded-md flex-1 dark:bg-black dark:text-white' value={incrementInput} onChange={(e) => handleIncrementInput(e.target.value)} />
                        <button className='w-[25%] border p-2 rounded-md bg-black text-white hover:bg-gray-200 dark:hover:bg-gray-800' onClick={() => handleIncrement(incrementInput)}>
                            <span className='flex justify-center items-center'><Plus /></span>
                        </button>
                    </div>                    
                    <div className='w-full flex items-center gap-4'>
                        <input type='number' id='incrementByInput' className='border py-2 px-4 rounded-md flex-1 dark:bg-black dark:text-white' value={decrementInput} onChange={(e) => handleDecrementInput(e.target.value)} />
                        <button className='w-[25%] border p-2 rounded-md bg-black text-white hover:bg-gray-200 dark:hover:bg-gray-800' onClick={() => handleDecrement(decrementInput)}>
                            <span className='flex justify-center items-center'><Minus /></span>
                        </button>
                    </div>                    
                    <div className='w-full flex items-center gap-4'>
                        <button className='flex-1 border p-2 rounded-md bg-black text-white hover:bg-gray-200 dark:hover:bg-gray-800' onClick={resetCounter}>
                            <span className='flex justify-center items-center'>Reset App</span>
                        </button>
                    </div>
                </div>
			</section>
		</main>
	);
};

export default Counter;