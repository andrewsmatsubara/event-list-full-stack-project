import { combineReducers } from 'redux';
import { reducer } from './reducer';

export const Reducers = combineReducers({
  state: reducer
});
