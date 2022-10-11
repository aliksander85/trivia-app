import { createSlice } from '@reduxjs/toolkit';

const requestParamsSlice = createSlice({
	name: 'requestParams',
	initialState: {
		limit: '',
		difficulty: '',
		category: '',
		categoryKey: '',
	},
	reducers: {
		setLimit(state, action) {
			state.limit = action.payload.limit;
		},
		setDifficulty(state, action) {
			state.difficulty = action.payload.difficulty;
		},
		setCategory(state, action) {
			state.category = action.payload.category;
		},
		setCategoryKey(state, action) {
			state.categoryKey = action.payload.categoryKey;
		},
	},
});

export const { setLimit, setDifficulty, setCategory, setCategoryKey } =
	requestParamsSlice.actions;

export default requestParamsSlice.reducer;
