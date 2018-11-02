import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const detailedInfoReducer = (state = [], action) => {  
    switch (action.type) {
        case actionTypes.FETCH_HOUSINGS_INFO_COMPLETE: {
            const { detailedInfo } = action.payload;
            
            return detailedInfo;
        }
        default: {
            return state;
        }
    }
};

const housingListReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_HOUSINGS_COMPLETE: {
            const { housingList } = action.payload;

            return housingList;
        }
        default: {
            return state;
        }
    }
};

const formReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.HOUSING_FORM_UPDATE: {
            const { form } = action.payload;

            return {
                ...state,
                ...form
            };
        }
        case actionTypes.HOUSING_FORM_ERROR_MESSAGE: {
            const { message } = action.payload;

            return {
                ...state,
                validationMessage: message
            };
        }
        case actionTypes.HOUSING_EDIT_FILL_FORM_COMPLETE: {
            const { housing } = action.payload; 
            
            return housing;
        }
        case actionTypes.HOUSING_RESET_FORM: {
            return { };
        }
        default: {
            return state;
        }
    };
};

export default combineReducers({
    housingList: housingListReducer,
    form: formReducer,
    detailedInfo: detailedInfoReducer
});