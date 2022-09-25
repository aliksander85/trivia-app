import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Start from './screens/Start';
import RandomPage from './screens/RandomPage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Start />,
		},
		{
			path: '/random',
			element: <RandomPage />,
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
