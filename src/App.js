import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RandomPage from './screens/RandomPage';
import Categories from './screens/Categories';
import Difficulty from './screens/Difficulty';
import Header from './components/Header';
import Quiz from './screens/Quiz';
import Footer from './components/Footer';

function App() {
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
		<div className="App">
			<header className="App__header">
				<Header />
			</header>
			<main className="App__main">
				<RouterProvider router={router} />
			</main>
			<footer className="App__footer">
				<Footer />
			</footer>
		</div>
	);
}

export default App;
