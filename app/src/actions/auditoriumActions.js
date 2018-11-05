import classroomsApi from '../utils/classroomsApi';
import * as actionTypes from './actionTypes';

export const fetchAuditoriums = (housingId) => dispatch => {
    dispatch(fetchAuditoriumsStart(housingId));

    classroomsApi.get(`api/housings/${housingId}/auditoriums`)
        .then(({ data }) => {
            dispatch(fetchAuditoriumsComplete(data));
        })
        .catch(error => console.error(error));
};

export const fetchAuditoriumsStart = () => ({
    type: actionTypes.FETCH_AUDITORIUMS_START
});

export const fetchAuditoriumsComplete = auditoriumList => ({
    type: actionTypes.FETCH_AUDITORIUMS_COMPLETE,
    payload: { auditoriumList }
});

export const fetchDetailedInfo = () => dispatch => {
    dispatch(fetchDetailedInfoStart());

    classroomsApi.get('api/housings/auditoriums/detailed')
        .then(({ data }) => {
            dispatch(fetchDetailedInfoComplete(data));
        })
        .catch(error => console.error(error));
}

export const fetchDetailedInfoStart = () => ({
    type: actionTypes.FETCH_AUDITORIUMS_INFO_START
});

export const fetchDetailedInfoComplete = (detailedInfo) => ({
    type: actionTypes.FETCH_AUDITORIUMS_INFO_COMPLETE,
    payload: { detailedInfo }
});

export const addAuditorium = (auditorium, callback) => dispatch => {
    dispatch(addAuditoriumStart());

    classroomsApi.post(`api/housings/${auditorium.housingId}/auditoriums`, auditorium)
        .then(result => {
            dispatch(addAuditoriumComplete());
            callback();
        })
        .catch(error => {
            dispatch(setErrorMessage(error.response.data));
        });
}

export const addAuditoriumStart = () => ({
    type: actionTypes.AUDITORIUM_ADD_START
});

export const addAuditoriumComplete = () => ({
    type: actionTypes.AUDITORIUM_ADD_COMPLETE
});

export const resetForm = () => ({
    type: actionTypes.AUDITORIUM_FORM_RESET
});

export const updateForm = form => ({
    type: actionTypes.AUDITORIUM_FORM_UPDATE,
    payload: { form }
});

export const setErrorMessage = message => ({
    type: actionTypes.AUDITORIUM_FORM_SET_ERROR_MESSAGE,
    payload: { validationMessage: message }
});

export const fillForm = (housingId, auditoriumId) => dispatch => {
    dispatch(fillFormStart());

    classroomsApi.get(`api/housings/${housingId}/auditoriums/${auditoriumId}`)
        .then(result => {
            dispatch(fillFormComplete(result.data));
        })
        .catch(error => console.error(error));
};

export const fillFormStart = () => ({
    type: actionTypes.AUDITORIUM_EDIT_FILL_FORM_START
});

export const fillFormComplete = auditorium => ({
    type: actionTypes.AUDITORIUM_EDIT_FILL_FORM_COMPLETE,
    payload: { auditorium }
});

export const editAuditorium = (auditorium, callback) => dispatch => {
    dispatch(editAuditoriumStart());

    classroomsApi.put(`api/housings/${auditorium.housingId}/auditoriums/${auditorium.id}`, auditorium)
        .then(result => {
            dispatch(editAuditoriumComplete());
            callback();
        })
        .catch(error => {
            dispatch(setErrorMessage(error.response.data));
        });
};

export const editAuditoriumStart = () => ({
    type: actionTypes.AUDITORIUM_EDIT_START
});

export const editAuditoriumComplete = () => ({
    type: actionTypes.AUDITORIUM_EDIT_COMPLETE
});

export const removeAuditorium = (housingId, auditoriumId) => dispatch => {
    classroomsApi.delete(`api/housings/${housingId}/auditoriums/${auditoriumId}`)
        .then(result => {
            dispatch(fetchAuditoriums(housingId));
        })
        .catch(error => console.error(error));
};