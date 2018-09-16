import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const housingReducer = (state = initialState.housings, action) => {
    const actionType = action.Type;

    switch (actionType) {
        default: {
            return state;
        }
    }
};

export default housingReducer;