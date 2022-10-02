import { useEffect, useState } from 'react';
import axios from 'axios';
import Category from '../components/Category';

function Categories() {
	const [categories, setCategories] = useState([]);
	const [categoriesData, setCategoriesData] = useState({});

	useEffect(() => {
		axios.get('https://the-trivia-api.com/api/categories').then((res) => {
			console.log('res', res);
			setCategoriesData(res.data);
			setCategories(Object.keys(res.data));
		});
	}, []);

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
		</section>
	);
}

export default Categories;
