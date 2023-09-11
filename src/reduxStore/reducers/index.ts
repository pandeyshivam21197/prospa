import {combineReducers} from '@reduxjs/toolkit';
import homeReducer from './homeReducer';
import singInReducer from './singInReducer';

export const rootReducer = combineReducers({homeReducer, singInReducer});
