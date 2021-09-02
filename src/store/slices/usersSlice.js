import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getUserProfileAPI } from '../../api/index';

export const getUserProfile = createAsyncThunk(
   'users/getUserProfile',
   (_id, thunkAPI) =>
      getUserProfileAPI(_id)
         .then((data) => data.data)
         .catch((e) => thunkAPI.rejectWithValue(e))
);

const initialState = {
   users: {},
};

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      addPostsToProfile(state, action) {
         const posts = state.users[action.payload._id].posts;
         action.payload.posts.forEach((post) => {
            posts.push(post);
         });
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getUserProfile.pending, (state, action) => {
            state.users[action.meta.arg] = {};
            state.users[action.meta.arg].isLoading = true;
         })
         .addCase(getUserProfile.fulfilled, (state, action) => {
            state.users[action.meta.arg] = action.payload;
            state.users[action.meta.arg].isLoading = false;
         });
   },
});

export const { addPostsToProfile } = usersSlice.actions;

export default usersSlice.reducer;
