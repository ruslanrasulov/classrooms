import { combineReducers } from 'redux';
import auditoriums from './auditoriumReducer';
import housings from './housingReducer';
import loading from './loadingReducer';

const rootReducer = combineReducers({
    auditoriums,
    housings,
    loading
});

export default rootReducer;