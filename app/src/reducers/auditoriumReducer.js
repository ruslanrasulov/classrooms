import { combineReducers } from 'redux';
import initialState from './initialState';
import { getForm } from '../selectors/auditoriumSelectors';
import * as actionTypes from '../actions/actionTypes';

const initialForm = getForm(initialState);

const detailedInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_AUDITORIUMS_INFO_COMPLETE: {
            const { detailedInfo } = action.payload;

            return detailedInfo;
        }
        default: {
            return state;
        }
    }
};

const auditoriumListReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_AUDITORIUMS_COMPLETE: {
            const { auditoriumList } = action.payload;
            
            return auditoriumList;
        }
        default: {
            return state;
        }
    }
}

const formReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.AUDITORIUM_FORM_UPDATE: {
            const { form } = action.payload;
            
            return {
                ...state,
                ...form
            };
        }
        case actionTypes.AUDITORIUM_FORM_RESET: {
            return initialForm;
        }
        case actionTypes.AUDITORIUM_FORM_SET_ERROR_MESSAGE: {
            const { validation } = action.payload;

            return {
                ...state,
                validation
            };
        }
        case actionTypes.AUDITORIUM_EDIT_FILL_FORM_COMPLETE: {
            const { auditorium } = action.payload;
            
            return {
                ...auditorium,
                validation: initialForm.validation
            };
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    form: formReducer,
    detailedInfo: detailedInfoReducer,
    auditoriumList: auditoriumListReducer
});