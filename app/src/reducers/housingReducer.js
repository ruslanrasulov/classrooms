import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const housingReducer = (state = initialState.housings, action) => {
    const actionType = action.type;
    
    switch (actionType) {
        case actionTypes.REMOVE_HOUSING: {
            const { id } = action.payload;
            
            return state.filter(housing => housing.id !== id);
        }
        default: {
            return state;
        }
    }
};

export default housingReducer;