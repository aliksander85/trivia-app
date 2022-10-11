import axios from 'axios';

export const BASE_URL = 'https://the-trivia-api.com';

export const getCategories = async () => {
	const response = await axios.get(`${BASE_URL}/api/categories`);
	return response.data;
};
