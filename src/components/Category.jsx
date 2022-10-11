import { useDispatch } from 'react-redux';
import { setCategory, setCategoryKey } from '../store/requestParamsSlice';

function Category(props) {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCategory({ category: props.category }));
		dispatch(
			setCategoryKey({
				categoryKey: props.category
					.replace(' & ', '_and_')
					.toLowerCase(),
			})
		);
	};

	return (
		<div className="category" onClick={handleClick}>
			<p className="category__title">{props.category}</p>
		</div>
	);
}

export default Category;
