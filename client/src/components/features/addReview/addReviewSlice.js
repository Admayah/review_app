import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    review : []
}
const reviewSlice = createSlice({
    name : 'review',
    initialState,
    reducers:{
        addReview : (state, action) => {
           state.review.push(action.payload)
           
        }
    }
});

export const {addReview} = reviewSlice.actions;

export default reviewSlice.reducer;