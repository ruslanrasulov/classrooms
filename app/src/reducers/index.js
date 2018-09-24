import { combineReducers } from 'redux';
import auditoriums from './auditoriumReducer';
import housings from './housingReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auditoriums,
    housings,
    form: formReducer
});

export default rootReducer;