import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '../store/categorySlice';

function Category(props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCategory({ category: props.category }));
		navigate('/difficulty');
	};

	return (
		<div className="category" onClick={handleClick}>
			<p className="category__title">{props.category}</p>
		</div>
	);
}

export default Category;
