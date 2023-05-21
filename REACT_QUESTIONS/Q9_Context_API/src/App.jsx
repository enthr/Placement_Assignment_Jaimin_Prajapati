import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import ThemeContext from './lib/ThemeContext';
import Header from './Layouts/Header';
import Dashboard from './Pages/Dashboard';

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	const theme = createTheme({
		palette: {
			mode: darkMode ? 'dark' : 'light'
		}
	});

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<ThemeContext.Provider value={{ toggleDarkMode, darkMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Container maxWidth='xl'>
					<Dashboard />
				</Container>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default App;
