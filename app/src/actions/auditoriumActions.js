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
        fetchAuditoriums: true
    }
});

export const fetchAuditoriumsComplete = auditoriumList => ({
    type: actionTypes.FETCH_AUDITORIUMS_COMPLETE,
    payload: {
        auditoriumList,
        fetchAuditoriums: false
    }
});