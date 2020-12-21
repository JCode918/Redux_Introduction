import { combineReducers } from 'redux';
import notesReducers from './notesReducer'

export default combineReducers({
    notes: notesReducers
})
