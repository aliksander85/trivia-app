import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	Box,
	Button,
	InputLabel,
	MenuItem,
	Select,
	Typography,
	useTheme,
} from '@mui/material';
import { setLimit, setDifficulty } from '../store/requestParamsSlice';
import { tokens } from '../theme';

function Difficulty() {
	const [difficultyLevel, setDifficultyLevel] = useState('easy');
	const [limitQuestions, setLimitQuestions] = useState(1);
	const navigate = useNavigate();
	const categories = useSelector((state) => state.requestParams.categories);
	const dispatch = useDispatch();
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

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
			<Typography variant="h2" className="page-title">
				Categories: {categories.join(', ')}
			</Typography>
			<Box className="difficulty__content">
				<Box className="difficulty__wrapper">
					<Box sx={{ display: 'block' }}>
						<Box sx={{ marginBottom: '50px' }}>
							<InputLabel id="choose-difficulty-label">
								Choose difficulty level:
							</InputLabel>
							<Select
								labelId="choose-difficulty-label"
								id="difficulty"
								value={difficultyLevel}
								onChange={handleChangeLevel}
								label="Difficulty"
							>
								{levels.map((level) => (
									<MenuItem
										key={level.value}
										value={level.value}
									>
										{level.text}
									</MenuItem>
								))}
							</Select>
						</Box>
						<Box sx={{ marginBottom: '50px' }}>
							<InputLabel id="limit-label">
								Choose a number of questions:
							</InputLabel>
							<Select
								labelId="limit-label"
								id="limit"
								value={limitQuestions}
								onChange={handleChangeLimit}
								label="Number of Questions"
							>
								{limits.map((limit) => (
									<MenuItem
										key={limit.value}
										value={limit.value}
									>
										{limit.text}
									</MenuItem>
								))}
							</Select>
						</Box>
						<Button
							className="main-button"
							variant="contained"
							sx={{
								background: colors.blueAccent[500],
								':hover, :active, :focus': {
									background: colors.blueAccent[600],
								},
							}}
							onClick={handleClick}
						>
							Start Quiz
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Difficulty;
