import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Difficulty() {
	const [difficultyLevel, setDifficultyLevel] = useState('');
	const [limitQuestions, setLimitQuestions] = useState('');
	const navigate = useNavigate();

	const limits = [];
	let i = 0;
	while (i < 20) {
		limits.push({ value: i, text: i });
		i++;
	}

	const levels = [
		{ value: '', text: '--Choose an option--' },
		{ value: 'easy', text: 'easy' },
		{ value: 'medium', text: 'medium' },
		{ value: 'hard', text: 'hard' },
	];

	const handleChangeLimit = (e) => {
		console.log(e.target.value);
		setLimitQuestions(e.target.value);
	};

	const handleChangeLevel = (e) => {
		console.log(e.target.value);
		setDifficultyLevel(e.target.value);
	};

	const handleClick = () => {
		navigate('/categories');
	};

	return (
		<div className="difficulty">
			<h2></h2>
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
