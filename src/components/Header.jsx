import { Box, IconButton, Link, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Header() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box
			className="header"
			sx={{
				backgroundColor: colors.grey[900],
				display: 'flex',
				justifyContent: 'space-between',
				padding: 2,
			}}
		>
			<Box sx={{ width: 0 }} />
			{/* TODO: put logo at the center */}
			<Typography variant="h1" className="header__title title">
				<Link
					sx={{
						color: colors.primary[100],
						textDecoration: 'none',
						':hover': {
							textDecoration: 'none',
						},
					}}
					href="/"
					title="Quiz"
					className="title__link"
				>
					Quiz
				</Link>
			</Typography>
			<Box display="flex">
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'light' ? (
						<DarkModeOutlinedIcon />
					) : (
						<LightModeOutlinedIcon />
					)}
				</IconButton>
			</Box>
		</Box>
	);
}

export default Header;
