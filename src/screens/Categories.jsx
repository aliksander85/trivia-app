import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryData } from '../store/categorySlice';
import Category from '../components/Category';
import { getCategories } from '../proxies/getCategories';
import { useNavigate } from 'react-router-dom';

function Categories() {
	const [categories, setCategories] = useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
		<section className="wrapper">
			<h2>Choose category</h2>
			<div className="categories">
				{categories.map((category) => (
					<Category
						className="categories__item"
						category={category}
						key={category}
					/>
				))}
			</div>
			<div className="button-wrapper">
				<button className="main-button" onClick={handleClick}>
					Set Categories
				</button>
			</div>
		</section>
	);
}

export default Categories;
