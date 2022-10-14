import { useNavigate } from 'react-router-dom';

function Score({ score, questionsLength }) {
	const navigate = useNavigate();

	const handleClickStartNew = () => {
		navigate('/');
	};

	return (
		<>
			<p className="score">
				Your score is {score} / {questionsLength}
			</p>
			<button onClick={handleClickStartNew}>Start new quiz</button>
		</>
	);
}

export default Score;
