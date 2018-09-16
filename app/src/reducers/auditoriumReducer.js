import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const auditoriumReducer = (state = initialState.auditories, action) => {
    const actionType = action.Type;

    switch (actionType) {
        default: {
            return state;
        }
    }
};

export default auditoriumReducer;