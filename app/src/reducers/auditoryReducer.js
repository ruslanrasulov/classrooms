import initialState from './initialState';
import * as actionTypes from './../actions/actionTypes';

const auditoryReducer = (state = initialState.auditories, action) => {
    const actionType = action.Type;

    switch (actionType) {
        default: {
            return state;
        }
    }
};

export default auditoryReducer;