import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategories, setCategoryKeys } from '../store/requestParamsSlice';

function Score({ score, questionsLength }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClickStartNew = () => {
		navigate('/');
		dispatch(setCategories({ command: 'clear' }));
		dispatch(setCategoryKeys({ command: 'clear' }));
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
