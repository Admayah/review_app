import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from './components/features/addReview/addReviewSlice';


export const store = configureStore({
  reducer: {
    review : reviewReducer
  },
})