import {
	Box,
	IconButton,
	Link,
	Menu,
	MenuItem,
	Typography,
	useTheme,
} from '@mui/material';
import { useContext, useState } from 'react';
import { ColorModeContext, tokens } from '../theme';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';

function Header() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const chooseTheme = (mode) => {
		colorMode.setColorMode(mode);
	};
	const handleMenuItemClick = (mode) => {
		setAnchorEl(null);
		chooseTheme(mode);
	};

	let iconEl;
	switch (colorMode.userTheme) {
		case 'light':
			iconEl = <LightModeIcon />;
			break;
		case 'dark':
			iconEl = <DarkModeIcon />;
			break;
		case 'os-default':
		default:
			iconEl = <BrightnessMediumIcon />;
			break;
	}

	return (
		<Box
			className="header"
			sx={{
				backgroundColor: colors.grey[900],
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
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
				<IconButton
					sx={{ borderRadius: 4 }}
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					{iconEl}
					&nbsp;
					<Typography variant="button">Theme</Typography>
				</IconButton>
				<Menu
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<MenuItem
						selected={colorMode.userTheme === 'os-default'}
						onClick={() => handleMenuItemClick('os-default')}
					>
						<BrightnessMediumIcon />
						&nbsp; OS default
					</MenuItem>
					<MenuItem
						selected={colorMode.userTheme === 'light'}
						onClick={() => handleMenuItemClick('light')}
					>
						<LightModeIcon />
						&nbsp; Light
					</MenuItem>
					<MenuItem
						sx={{
							'&.Mui-selected': {
								backgroundColor: colors.primary[600],
							},
						}}
						selected={colorMode.userTheme === 'dark'}
						onClick={() => handleMenuItemClick('dark')}
					>
						<DarkModeIcon />
						&nbsp; Dark
					</MenuItem>
				</Menu>
			</Box>
		</Box>
	);
}

export default Header;
