import {createSlice} from '@reduxjs/toolkit';
import {ISingInReducer} from './interfaces';

export const initialState: ISingInReducer = {
  //add init state
};

export const signInReducerSlice = createSlice({
  name: 'singInReducer',
  initialState,
  reducers: {},
});

export const {} = signInReducerSlice.actions;

export default signInReducerSlice.reducer;
