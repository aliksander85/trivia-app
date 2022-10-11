import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import requestParamsReducer from './requestParamsSlice';

export default configureStore({
	reducer: {
		category: categoryReducer,
		requestParams: requestParamsReducer,
	},
});
