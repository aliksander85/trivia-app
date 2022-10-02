import { useNavigate } from 'react-router-dom';

function Category(props) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/difficulty');
	};

	return (
		<div className="category" onClick={handleClick}>
			<p className="category__title">{props.category}</p>
		</div>
	);
}

export default Category;
