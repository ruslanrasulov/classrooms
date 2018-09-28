import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchAuditoriums = (housingId) => dispatch => {
    dispatch(fetchAuditoriumsStart(housingId));

    axios.get(`http://localhost:50505/api/housings/${housingId}/auditoriums`)
        .then(({ data }) => {
            dispatch(fetchAuditoriumsComplete(data));
        });
};

export const fetchAuditoriumsStart = () => ({
    type: actionTypes.FETCH_AUDITORIUMS_START,
    payload: {
        isLoading: true
    }
});

export const fetchAuditoriumsComplete = auditoriumList => ({
    type: actionTypes.FETCH_AUDITORIUMS_COMPLETE,
    payload: {
        auditoriumList,
        isLoading: false
    }
});

export const fetchDetailedInfo = () => dispatch => {
    dispatch(fetchDetailedInfoStart());

    axios.get("http://localhost:50505/api/housings/auditoriums/detailed")
        .then(({ data }) => {
            dispatch(fetchDetailedInfoComplete(data));
        })
}

export const fetchDetailedInfoStart = () => ({
    type: actionTypes.FETCH_AUDITORIUMS_INFO_START,
    payload: {
        isLoading: true
    }
});

export const fetchDetailedInfoComplete = (detailedInfo) => ({
    type: actionTypes.FETCH_AUDITORIUMS_INFO_COMPLETE,
    payload: {
        detailedInfo,
        isLoading: false
    }
});