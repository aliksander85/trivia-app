import React from 'react';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../theme';

function PageNotFound() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<Box
			sx={{
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Container>
				<Typography variant="h2" sx={{ marginBottom: '20px' }}>
					404 Page Not Found
				</Typography>
				<Button
					variant="contained"
					sx={{
						background: colors.blueAccent[500],
						':hover, :active, :focus': {
							background: colors.blueAccent[600],
						},
					}}
					onClick={handleClick}
				>
					Start new quiz
				</Button>
			</Container>
		</Box>
	);
}

export default PageNotFound;
