import * as actionTypes from '../actions/actionTypes';

const auditoriumReducer = (state = {}, action) => {
    const actionType = action.type;

    switch (actionType) {
        case actionTypes.FETCH_AUDITORIUMS_COMPLETE: {
            const { auditoriumList } = action.payload;
            
            return {
                ...state,
                auditoriumList
            };
        }
        case actionTypes.FETCH_AUDITORIUMS_INFO_COMPLETE: {
            const { detailedInfo } = action.payload;

            return {
                ...state,
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
                form: { }
            };
        }
        case actionTypes.AUDITORIUM_FORM_SET_ERROR_MESSAGE: {
            const { validationMessage } = action.payload;

            return {
                ...state,
                form: {
                    ...state.form,
                    validationMessage
                }
            };
        }
        case actionTypes.AUDITORIUM_EDIT_FILL_FORM_COMPLETE: {
            const { auditorium } = action.payload;

            return {
                ...state,
                form: auditorium
            };
        }
    }
};

export default auditoriumReducer;