import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RandomPage from './screens/RandomPage';
import Categories from './screens/Categories';
import Difficulty from './screens/Difficulty';
import Header from './components/Header';

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
	]);

	return (
		<div className="App">
			<Header />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
