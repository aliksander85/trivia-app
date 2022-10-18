import { createSlice } from '@reduxjs/toolkit';

const requestParamsSlice = createSlice({
	name: 'requestParams',
	initialState: {
		limit: '5',
		difficulty: 'easy',
		categories: [],
		categoryKeys: [],
	},
	reducers: {
		setLimit(state, action) {
			state.limit = action.payload.limit;
		},
		setDifficulty(state, action) {
			state.difficulty = action.payload.difficulty;
		},
		setCategories(state, action) {
			const existingCategories = state.categories;
			if (action.payload.command && action.payload.command === 'clear') {
				state.categories = [];
				return;
			}
			if (!action.payload.category) return;
			state.categories = existingCategories.includes(
				action.payload.category
			)
				? existingCategories.filter(
						(category) => category !== action.payload.category
				  )
				: [
						...new Set([
							...existingCategories,
							action.payload.category,
						]),
				  ];
		},
		setCategoryKeys(state, action) {
			const existingCategoryKeys = state.categoryKeys;
			if (action.payload.command && action.payload.command === 'clear') {
				state.categoryKeys = [];
				return;
			}
			if (!action.payload.categoryKey) return;
			state.categoryKeys = existingCategoryKeys.includes(
				action.payload.categoryKey
			)
				? existingCategoryKeys.filter(
						(categoryKey) =>
							categoryKey !== action.payload.categoryKey
				  )
				: [
						...new Set([
							...existingCategoryKeys,
							action.payload.categoryKey,
						]),
				  ];
		},
	},
});

export const { setLimit, setDifficulty, setCategories, setCategoryKeys } =
	requestParamsSlice.actions;

export default requestParamsSlice.reducer;
