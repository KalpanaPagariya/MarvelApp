import { combineReducers } from 'redux';
import characters from './characters';

const marvelReducer = combineReducers({
    characters
})

export default marvelReducer