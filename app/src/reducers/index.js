import { combineReducers } from 'redux';
import auditoriums from './auditoriumReducer';
import housings from './housingReducer';

const rootReducer = combineReducers({
    auditoriums,
    housings
});

export default rootReducer;