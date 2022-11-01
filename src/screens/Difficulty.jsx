import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLimit, setDifficulty } from '../store/requestParamsSlice';
import { Box, Typography } from '@mui/material';

function Difficulty() {
	const [difficultyLevel, setDifficultyLevel] = useState('easy');
	const [limitQuestions, setLimitQuestions] = useState(1);
	const navigate = useNavigate();
	const categories = useSelector((state) => state.requestParams.categories);
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
		if (categories.length === 0) {
			navigate('/');
			return;
		}
		setLimitQuestions(5);
	}, [categories.length, navigate]);

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
		<Box className="difficulty">
			<Typography variant="h2">
				Categories: {categories.join(', ')}
			</Typography>
			<Box className="difficulty__wrapper">
				<Box sx={{ display: 'block' }}>
					<Box>
						<label htmlFor="difficulty">
							Choose difficulty level:
						</label>
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
					</Box>
					<Box>
						<label htmlFor="limit">
							Choose a number of questions:
						</label>
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
					</Box>
					<button onClick={handleClick}>Start Quiz</button>
				</Box>
			</Box>
		</Box>
	);
}

export default Difficulty;
