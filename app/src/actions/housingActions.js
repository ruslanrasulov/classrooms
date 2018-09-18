import * as actionTypes from './actionTypes';

export const removeHousing = id => ({
    type: actionTypes.REMOVE_HOUSING,
    payload: { id }
});