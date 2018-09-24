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

export const fetchDetailedInfo = () => dispatch => {
    dispatch(fetchDetailedInfoStart());

    axios.get("http://localhost:50505/api/housings/detailed")
        .then(({ data }) => {
            dispatch(fetchDetailedInfoComplete(data));
        })
};

export const fetchDetailedInfoStart = () => ({
    type: actionTypes.FECTH_HOUSINGS_INFO_START,
    payload: {
        fetchDetailedInfo: true
    }
});

export const fetchDetailedInfoComplete = (detailedInfo) => ({
    type: actionTypes.FETCH_HOUSINGS_INFO_COMPLETE,
    payload: {
        fetchDetailedInfo: false,
        detailedInfo
    }
});