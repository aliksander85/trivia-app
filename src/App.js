import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import { ColorModeContext, useMode } from './theme';
import RandomPage from './screens/RandomPage';
import Categories from './screens/Categories';
import Difficulty from './screens/Difficulty';
import Header from './components/Header';
import Quiz from './screens/Quiz';
import Footer from './components/Footer';
import PageNotFound from './screens/PageNotFound';

function App() {
	const [theme, colorMode] = useMode();
	const router = createHashRouter([
		{
			path: '/',
			element: <Categories />,
		},
		{
			path: '/random',
			element: <RandomPage />,
		},
		{
			path: '/difficulty',
			element: <Difficulty />,
		},
		{
			path: '/quiz',
			element: <Quiz />,
		},
		{
			path: '*',
			element: <PageNotFound />,
		},
	]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box className="app">
					<header className="app__header">
						<Header />
					</header>
					<Container component="main" className="app__main">
						<RouterProvider router={router} />
					</Container>
					<Box component="footer" className="app__footer">
						<Footer />
					</Box>
				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
