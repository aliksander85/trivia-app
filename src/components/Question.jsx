import { useState } from 'react';
import { Button, List, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import Answer from './Answer';

function Question({
	setIsFinish,
	answers,
	setScore,
	number,
	setQuestion,
	questionsLength,
	question,
}) {
	const [currentAnswer, setCurrentAnswer] = useState('');
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const handleClickAnswer = (answer) => {
		setCurrentAnswer(answer);
	};

	const handleClickNext = () => {
		if (currentAnswer === question.correctAnswer) {
			setScore((prevScore) => prevScore + 1);
		}
		if (number < questionsLength - 1) {
			setQuestion((current) => current + 1);
		}
		if (number === questionsLength - 1) {
			setIsFinish(true);
		}
	};

	return (
		<>
			<h2 className="question-card__title">{question.question}</h2>
			<List className="question-card__list answers">
				{answers.map((answer) => (
					<Answer
						key={answer}
						answer={answer}
						currentAnswer={currentAnswer}
						handleClickAnswer={handleClickAnswer}
					/>
				))}
			</List>
			<Typography>
				Question {number + 1}/{questionsLength}
			</Typography>
			<Button
				className="main-button"
				variant="contained"
				sx={{
					background: colors.blueAccent[500],
					':hover, :active, :focus': {
						background: colors.blueAccent[600],
					},
					marginTop: '20px',
				}}
				onClick={handleClickNext}
			>
				{number >= questionsLength - 1 ? 'Finish' : 'Next'}
			</Button>
		</>
	);
}

export default Question;
