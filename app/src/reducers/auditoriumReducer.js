import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const auditoriumReducer = (state = {}, action) => {
    const actionType = action.type;

    switch (actionType) {
        case actionTypes.FETCH_AUDITORIUMS_START: {
            const { isLoading } = action.payload;

            return {
                ...state,
                isLoading
            };
        }
        case actionTypes.FETCH_AUDITORIUMS_COMPLETE: {
            const { auditoriumList, isLoading } = action.payload;
            
            return {
                ...state,
                auditoriumList,
                isLoading
            };
        }
        case actionTypes.FETCH_AUDITORIUMS_INFO_START: {
            const { isLoading } = action.payload;

            return {
                ...state,
                isLoading
            };
        }
        case actionTypes.FETCH_AUDITORIUMS_INFO_COMPLETE: {
            const { detailedInfo, isLoading } = action.payload;

            return {
                ...state,
                isLoading,
                detailedInfo
            };
        }
        default: {
            return state;
        }
        case actionTypes.AUDITORIUM_FORM_UPDATE: {
            const form = Object.assign(state.form, action.payload.form);

            return {
                ...state,
                form
            };
        }
        case actionTypes.AUDITORIUM_FORM_RESET: {
            return {
                ...state,
                form: { },
                isLoading: false
            };
        }
        case actionTypes.AUDITORIUM_ADD_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actionTypes.AUDITORIUM_ADD_COMPLETE: {
            return {
                ...state,
                isLoading: false
            }
        }
        case actionTypes.AUDITORIUM_FORM_SET_ERROR_MESSAGE: {
            const { validationMessage } = action.payload;

            return {
                ...state,
                validationMessage,
                isLoading: false
            };
        }
        case actionTypes.AUDITORIUM_EDIT_START: {
            return {
                ...state,
                isLoading: true
            };
        }
        case actionTypes.AUDITORIUM_EDIT_COMPLETE: {
            return {
                ...state,
                isLoading: false
            };
        }
        case actionTypes.AUDITORIUM_EDIT_FILL_FORM_START: {
            return {
                ...state,
                isLoading: true
            };
        }
        case actionTypes.AUDITORIUM_EDIT_FILL_FORM_COMPLETE: {
            const { auditorium } = action.payload;

            return {
                ...state,
                form: auditorium,
                isLoading: false,
            };
        }
    }
};

export default auditoriumReducer;