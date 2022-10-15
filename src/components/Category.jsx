import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCategoryKeys } from '../store/requestParamsSlice';

function Category(props) {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.requestParams.categories);

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
		<div
			className={
				'category ' +
				(categories.includes(props.category) ? 'selected' : '')
			}
			onClick={handleClick}
		>
			<p className="category__title">{props.category}</p>
		</div>
	);
}

export default Category;
