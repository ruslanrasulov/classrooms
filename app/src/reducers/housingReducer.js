import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const housingReducer = (state = initialState.housings, action) => {
    const actionType = action.type;
    
    switch (actionType) {
        case actionTypes.REMOVE_HOUSING: {
            const { id } = action.payload;
            
            return state.filter(housing => housing.id !== id);
        }
        case actionTypes.FETCH_HOUSINGS_START: {
            const { fetchHousings } = action.payload;
            return {
                fetchHousings,
                ...state
            }
        }
        case actionTypes.FETCH_HOUSINGS_COMPLETE: {
            const { housingList, fetchHousings } = action.payload;

            return {
                ...state,
                housingList,
                fetchHousings,
            };
        }
        case actionTypes.FECTH_HOUSINGS_INFO_START: {
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

export default housingReducer;