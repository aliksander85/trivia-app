import { Container, Link, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../theme';

function Footer() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Container
			className="footer"
			sx={{ backgroundColor: colors.grey[900] }}
		>
			<Typography className="footer__text">Alexander Potapov</Typography>
			<Typography className="footer__text">
				API by{' '}
				<Link
					href="https://the-trivia-api.com/"
					title="Trivia API"
					target="_blank"
					rel="noreferrer"
					sx={{
						color: colors.primary[100],
					}}
				>
					the-trivia-api.com
				</Link>
			</Typography>
		</Container>
	);
}

export default Footer;
