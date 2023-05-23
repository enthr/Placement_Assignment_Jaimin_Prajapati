import { Sun, Moon, ClipboardList } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
	return (
		<header className='relative min-h-[5vh] bg-white text-black dark:bg-black dark:text-white py-2'>
			<nav className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <ClipboardList size={32} className='mr-2' />
                        <span className='font-bold text-xl'>Todo App</span>
                    </div>
                    <div className='flex items-center'>
                        <button className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800' onClick={toggleDarkMode}>
                            {darkMode ? <Sun className='w-6 h-6' /> : <Moon className='w-6 h-6' />}
                        </button>
                    </div>
                </div>
            </nav>
		</header>
	);
};

export default Header;