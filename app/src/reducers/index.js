import { combineReducers } from 'redux';
import auditories from './auditoriumReducer';
import housings from './housingReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auditories,
    housings,
    form: formReducer
});

export default rootReducer;