import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLimit, setDifficulty } from '../store/requestParamsSlice';

function Difficulty() {
	const [difficultyLevel, setDifficultyLevel] = useState('easy');
	const [limitQuestions, setLimitQuestions] = useState(1);
	const navigate = useNavigate();
	const category = useSelector((state) => state.requestParams.category);
	const dispatch = useDispatch();

	const limits = [];
	let i = 1;
	while (i < 20) {
		const option = { value: i, text: i };
		limits.push(option);
		i++;
	}

	const levels = [
		{ value: 'easy', text: 'easy' },
		{ value: 'medium', text: 'medium' },
		{ value: 'hard', text: 'hard' },
	];

	useEffect(() => {
		setLimitQuestions(5);
	}, []);

	const handleChangeLimit = (e) => {
		setLimitQuestions(e.target.value);
		dispatch(setLimit({ limit: e.target.value }));
	};

	const handleChangeLevel = (e) => {
		setDifficultyLevel(e.target.value);
		dispatch(setDifficulty({ difficulty: e.target.value }));
	};

	const handleClick = () => {
		navigate('/quiz');
	};

	return (
		<div className="difficulty">
			<h2>{category}</h2>
			<div>
				<label htmlFor="difficulty">Choose difficulty level:</label>
				<select
					name="difficulty"
					id="difficulty"
					onChange={handleChangeLevel}
					value={difficultyLevel}
				>
					{levels.map((level) => (
						<option key={level.value} value={level.value}>
							{level.text}
						</option>
					))}
				</select>
			</div>
			<div>
				<label htmlFor="limit">Choose a number of questions:</label>
				<select
					name="limit"
					id="limit"
					onChange={handleChangeLimit}
					value={limitQuestions}
				>
					{limits.map((limit) => (
						<option key={limit.value} value={limit.value}>
							{limit.text}
						</option>
					))}
				</select>
			</div>
			<button onClick={handleClick}>Start Quiz</button>
		</div>
	);
}

export default Difficulty;
