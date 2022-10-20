import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Header() {
	const theme = useTheme();
	// const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box
			className="header"
			display="flex"
			justifyContent="space-between"
			p={2}
		>
			<h1 className="header__title title">
				<a href="/" title="Quiz" className="title__link">
					Quiz
				</a>
			</h1>
			<Box display="flex">
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'dark' ? (
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
