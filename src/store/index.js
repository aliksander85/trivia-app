import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import requestParamsReducer from './requestParamsSlice';
import questionsReducer from './questionsSlice';

export default configureStore({
	reducer: {
		category: categoryReducer,
		requestParams: requestParamsReducer,
		questions: questionsReducer,
	},
});
