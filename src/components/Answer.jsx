import { ListItem, useTheme } from '@mui/material';
import { tokens } from '../theme';
import React from 'react';

function Answer({ answer, currentAnswer, handleClickAnswer }) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<ListItem
			className={
				'answers__item answer ' +
				(answer === currentAnswer ? 'selected' : '')
			}
			sx={{
				color: colors.primary[100],
				background: colors.grey[900],
				':hover': {
					background: colors.grey[800],
				},
				'&.selected': {
					background: colors.grey[700],
				},
			}}
			onClick={() => handleClickAnswer(answer)}
		>
			{answer}
		</ListItem>
	);
}

export default Answer;
