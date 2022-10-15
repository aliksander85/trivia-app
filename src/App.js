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
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</div>
	);
}

export default App;
