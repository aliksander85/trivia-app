import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import RandomPage from './screens/RandomPage';
import Categories from './screens/Categories';
import Difficulty from './screens/Difficulty';
import Header from './components/Header';
import Quiz from './screens/Quiz';
import Footer from './components/Footer';

function App() {
	const [theme, colorMode] = useMode();
	const router = createBrowserRouter([
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
	]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<section className="app">
					<header className="app__header">
						<Header />
					</header>
					<main className="app__main">
						<RouterProvider router={router} />
					</main>
					<footer className="app__footer">
						<Footer />
					</footer>
				</section>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
