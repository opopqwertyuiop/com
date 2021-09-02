import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//  registerAPI,
import { checkAPI } from '../../api/index';

export const checkUser = createAsyncThunk(
   'auth/checkUser',
   (config, thunkAPI) =>
      checkAPI()
         .then((data) => data.data)
         .catch(() => thunkAPI.rejectWithValue())
);

const initialState = {
   isLoading: true,
   user: null,
   isAuth: false,
};
//
// a
const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUser(state, action) {
         state.user = action.payload;
         state.isAuth = action.payload ? true : false;
      },
      setIsLoading(state, action) {
         state.isLoading = action.payload;
      },
      logout(state) {
         state.user = null;
         state.isAuth = false;
      },
   },
   extraReducers: (builder) => {
      builder
         // .addCase(checkUser.pending, (state) => {
         //    state.isLoading = true;
         // })
         .addCase(checkUser.fulfilled, (state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.isAuth = true;
            state.user = action.payload;
         })
         .addCase(checkUser.rejected, (state) => {
            state.isLoading = false;
            state.isAuth = false;
         });
   },
});

export const { setUser, setIsLoading, logout } = authSlice.actions;

export default authSlice.reducer;
// )
// r
// IMPORT
// async
// {}
// registerAPI
// config
// {}
// , action
// out
// r
// false
