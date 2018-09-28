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
    }
};

export default auditoriumReducer;