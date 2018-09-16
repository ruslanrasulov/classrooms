import { combineReducers } from 'redux';
import auditories from './auditoryReducer';
import housings from './housingReducer';

const rootReducer = combineReducers({
    auditories,
    housings
});

export default rootReducer;