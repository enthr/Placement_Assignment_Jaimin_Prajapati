import { useState, useEffect } from 'react';

import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Counter from './Pages/Counter';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode === true) {
            document.querySelector('html').classList.add('dark');
        }
        if (darkMode === false) {
            document.querySelector('html').classList.remove('dark');
        }
    }, [darkMode]);

	return (
		<>
			<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <hr className='text-[#E0E0E0]' />
			<Counter />
            <hr className='text-[#E0E0E0]' />
			<Footer />
		</>
	);
};

export default App;