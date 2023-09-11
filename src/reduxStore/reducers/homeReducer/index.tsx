import {IHomeReducer} from './interfaces';
import {createSlice} from '@reduxjs/toolkit';

export const initialState: IHomeReducer = {
  //add init state
};

export const homeReducerSlice = createSlice({
  name: 'homeReducer',
  initialState,
  reducers: {},
});

export const {} = homeReducerSlice.actions;

export default homeReducerSlice.reducer;
