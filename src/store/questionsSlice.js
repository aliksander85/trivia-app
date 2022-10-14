import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
	name: 'questions',
	initialState: {
		questionsData: [],
	},
	reducers: {
		setQuestionsData(state, action) {
			state.questionsData = action.payload.questionsData;
		},
	},
});

export const { setQuestionsData } = questionsSlice.actions;

export default questionsSlice.reducer;
