import { combineReducers } from 'redux';
import initialState from './initialState';
import { getForm } from '../selectors/housingSelectors';
import * as actionTypes from '../actions/actionTypes';

const initialForm = getForm(initialState);

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
                ...form,
                validation: initialForm.validation
            };
        }
        case actionTypes.HOUSING_FORM_ERROR_MESSAGE: {
            const { validation } = action.payload;

            return {
                ...state,
                validation
            };
        }
        case actionTypes.HOUSING_EDIT_FILL_FORM_COMPLETE: {
            const { housing } = action.payload; 
            
            return {
                ...housing,
                validation: initialForm.validation
            };
        }
        case actionTypes.HOUSING_RESET_FORM: {
            return initialForm;
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