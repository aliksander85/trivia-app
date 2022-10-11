import axios from 'axios';
import { BASE_URL } from './getCategories';

export const getQuestions = async ({ categoryKey, limit, difficulty }) => {
	const response = await axios.get(
		`${BASE_URL}/api/questions?categories=${categoryKey}&limit=${limit}&difficulty=${difficulty}`
	);
	return response.data;
};
