import * as actionTypes from '../actions/actionTypes';

const loadingReducer = (state = true, action) => {
    const actionType = action.type;

    switch (actionType) {
        case actionTypes.AUDITORIUM_FORM_RESET:
        case actionTypes.AUDITORIUM_ADD_COMPLETE:
        case actionTypes.AUDITORIUM_FORM_SET_ERROR_MESSAGE:
        case actionTypes.HOUSING_FORM_ERROR_MESSAGE:
        case actionTypes.HOUSING_EDIT_FILL_FORM_COMPLETE:
        case actionTypes.HOUSING_RESET_FORM:
        case actionTypes.FETCH_AUDITORIUMS_INFO_COMPLETE:
        case actionTypes.FETCH_HOUSINGS_INFO_COMPLETE:
        case actionTypes.FETCH_AUDITORIUMS_COMPLETE:
        case actionTypes.FETCH_HOUSINGS_COMPLETE:
        case actionTypes.HOUSING_EDIT_COMPLETE: {
            return false;
        }
        case actionTypes.FETCH_AUDITORIUMS_START:
        case actionTypes.FETCH_HOUSINGS_START:
        case actionTypes.FECTH_HOUSINGS_INFO_START:
        case actionTypes.FETCH_AUDITORIUMS_INFO_START:
        case actionTypes.AUDITORIUM_ADD_START:
        case actionTypes.HOUSING_EDIT_FILL_FORM_START:
        case actionTypes.HOUSING_EDIT_START: {
            return true;
        }
        default: {
            return state;
        }
    }
};

export default loadingReducer;