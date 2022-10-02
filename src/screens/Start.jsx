import { useNavigate } from 'react-router-dom';

function Start() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/categories');
	};

	return <button onClick={handleClick}>Start Quiz</button>;
}

export default Start;
