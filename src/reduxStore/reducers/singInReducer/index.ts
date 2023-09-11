import {createSlice} from '@reduxjs/toolkit';
import {ISingInReducer} from './interfaces';

export const initialState: ISingInReducer = {
  //add init state
  isLoggedIn: false,
};

export const signInReducerSlice = createSlice({
  name: 'singInReducer',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action?.payload;
    },
  },
});

export const {setIsLoggedIn} = signInReducerSlice.actions;

export default signInReducerSlice.reducer;
