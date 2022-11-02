import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import { setCategories, setCategoryKeys } from '../store/requestParamsSlice';

function Score({ score, questionsLength }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const handleClickStartNew = () => {
		navigate('/');
		dispatch(setCategories({ command: 'clear' }));
		dispatch(setCategoryKeys({ command: 'clear' }));
	};

	return (
		<Box className="score">
			<Box className="score__wrapper">
				<Typography
					variant="h3"
					className="score__title"
					sx={{ marginBottom: '20px' }}
				>
					Your score is {score} / {questionsLength}
				</Typography>
				<Button
					className="score__button main-button"
					variant="contained"
					sx={{
						background: colors.blueAccent[500],
						':hover, :active, :focus': {
							background: colors.blueAccent[600],
						},
					}}
					onClick={handleClickStartNew}
				>
					Start new quiz
				</Button>
			</Box>
		</Box>
	);
}

export default Score;
