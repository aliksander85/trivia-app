import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { setCategoryData } from '../store/categorySlice';
import Category from '../components/Category';
import { getCategories } from '../proxies/getCategories';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../theme';

function Categories() {
	const [categories, setCategories] = useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	useEffect(() => {
		getCategories().then((data) => {
			setCategories(Object.keys(data));
			dispatch(setCategoryData({ categoryData: data }));
		});
	}, [dispatch]);

	const handleClick = () => {
		navigate('/difficulty');
	};

	return (
		<Box className="categories">
			<Container className="categories__container">
				<Typography
					variant="h2"
					className="categories__title"
					sx={{ marginTop: '20px', marginBottom: '20px' }}
				>
					Choose category
				</Typography>
				<Box className="categories__box">
					{categories.map((category) => (
						<Box
							key={category}
							className="categories__item-wrapper"
						>
							<Category category={category} />
						</Box>
					))}
				</Box>
				<Box className="button-wrapper">
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
						Set Categories
					</Button>
				</Box>
			</Container>
		</Box>
	);
}

export default Categories;
