import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

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
            return { };
        }
        case actionTypes.AUDITORIUM_FORM_SET_ERROR_MESSAGE: {
            const { validationMessage } = action.payload;

            return {
                ...state,
                validationMessage
            };
        }
        case actionTypes.AUDITORIUM_EDIT_FILL_FORM_COMPLETE: {
            const { auditorium } = action.payload;

            return auditorium;
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