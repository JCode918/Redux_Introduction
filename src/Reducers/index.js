import { combineReducers } from 'redux';
import notesReducers from './notesReducer';
import todoReducers from './todoReducers';

export default combineReducers({
	notes: notesReducers,
	todos: todoReducers,
});
