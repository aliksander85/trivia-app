import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { setCategories, setCategoryKeys } from '../store/requestParamsSlice';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

function Category(props) {
	const dispatch = useDispatch();
	const theme = useTheme();
	const categories = useSelector((state) => state.requestParams.categories);
	const colors = tokens(theme.palette.mode);

	const handleClick = () => {
		dispatch(setCategories({ category: props.category }));
		dispatch(
			setCategoryKeys({
				categoryKey: props.category
					.replace(' & ', '_and_')
					.toLowerCase(),
			})
		);
	};

	return (
		<Card
			className={
				'category ' +
				(categories.includes(props.category) ? 'selected' : '')
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
			onClick={handleClick}
		>
			<CardContent>
				<Typography className="category__title">
					{props.category}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default Category;
