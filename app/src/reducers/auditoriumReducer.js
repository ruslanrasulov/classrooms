import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const auditoriumReducer = (state = initialState.auditoriums, action) => {
    const actionType = action.type;

    switch (actionType) {
        case actionTypes.FETCH_AUDITORIUMS_START: {
            const { fetchAuditoriums } = action.payload;

            return {
                ...state,
                fetchAuditoriums
            };
        }
        case actionTypes.FETCH_AUDITORIUMS_COMPLETE: {
            const { auditoriumList, fetchAuditoriums } = action.payload;
            
            return {
                ...state,
                auditoriumList,
                fetchAuditoriums
            };
        }
        case actionTypes.FETCH_AUDITORIUMS_INFO_START: {
            const { fetchDetailedInfo } = action.payload;

            return {
                ...state,
                fetchDetailedInfo
            };
        }
        case actionTypes.FETCH_AUDITORIUMS_INFO_COMPLETE: {
            const { detailedInfo, fetchDetailedInfo } = action.payload;

            return {
                ...state,
                fetchDetailedInfo,
                detailedInfo
            };
        }
        default: {
            return state;
        }
    }
};

export default auditoriumReducer;