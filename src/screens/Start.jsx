import { useNavigate } from 'react-router-dom';

function Start() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/random');
	};

	return <button onClick={handleClick}>Start Quiz</button>;
}

export default Start;
