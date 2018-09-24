import axios from 'axios';
import * as actionTypes from './actionTypes';

export const removeHousing = id => ({
    type: actionTypes.REMOVE_HOUSING,
    payload: { id }
});

export const fetchHousings = () => dispatch => {
    dispatch(fetchHousingsStart());

    axios.get('http://localhost:50505/api/housings').then((housings) => {
        dispatch(fetchHousingsComplete(housings.data));
    }).catch((error) => console.log(error));
};

export const fetchHousingsStart = () => ({
    type: actionTypes.FETCH_HOUSINGS_START,
    payload: { fetchHousings: true }
});

export const fetchHousingsComplete = (housingList) => ({
    type: actionTypes.FETCH_HOUSINGS_COMPLETE,
    payload: {
        fetchHousings: false,
        housingList: housingList
    }
});

