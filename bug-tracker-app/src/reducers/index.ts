import { combineReducers } from 'redux';

import bugsReducer from './bugsReducer'

export default combineReducers({ bugsState : bugsReducer });