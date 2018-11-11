import classroomsApi from '../utils/classroomsApi';
import validateAuditorium from '../utils/validation/auditoriumValidator';
import * as actionTypes from './actionTypes';

export const fetchAuditoriumsStart = () => ({
    type: actionTypes.FETCH_AUDITORIUMS_START,
});

export const fetchAuditoriumsComplete = auditoriumList => ({
    type: actionTypes.FETCH_AUDITORIUMS_COMPLETE,
    payload: { auditoriumList },
});

export const fetchAuditoriums = housingId => (dispatch) => {
    dispatch(fetchAuditoriumsStart(housingId));

    classroomsApi.get(`api/housings/${housingId}/auditoriums`)
        .then(response => (
            dispatch(fetchAuditoriumsComplete(response.data))
        ))
        .catch(error => console.log(error));
};

export const fetchDetailedInfoStart = () => ({
    type: actionTypes.FETCH_AUDITORIUMS_INFO_START,
});

export const fetchDetailedInfoComplete = detailedInfo => ({
    type: actionTypes.FETCH_AUDITORIUMS_INFO_COMPLETE,
    payload: { detailedInfo },
});

export const fetchDetailedInfo = () => (dispatch) => {
    dispatch(fetchDetailedInfoStart());

    classroomsApi.get('api/housings/auditoriums/detailed')
        .then(({ data }) => {
            dispatch(fetchDetailedInfoComplete(data));
        })
        .catch(error => console.error(error));
};

export const addAuditoriumStart = () => ({
    type: actionTypes.AUDITORIUM_ADD_START,
});

export const addAuditoriumComplete = () => ({
    type: actionTypes.AUDITORIUM_ADD_COMPLETE,
});

export const setErrorMessage = message => ({
    type: actionTypes.AUDITORIUM_FORM_SET_ERROR_MESSAGE,
    payload: { validation: message },
});

export const addAuditorium = (auditorium, callback) => (dispatch) => {
    const validationMessage = validateAuditorium(auditorium);

    if (!validationMessage.isValid) {
        dispatch(setErrorMessage(validationMessage));
        return;
    }

    dispatch(addAuditoriumStart());

    classroomsApi.post(`api/housings/${auditorium.housingId}/auditoriums`, auditorium)
        .then(() => {
            dispatch(addAuditoriumComplete());
            callback();
        })
        .catch((error) => {
            dispatch(setErrorMessage({ summary: error.response.data }));
        });
};

export const resetForm = () => ({
    type: actionTypes.AUDITORIUM_FORM_RESET,
});

export const updateForm = form => ({
    type: actionTypes.AUDITORIUM_FORM_UPDATE,
    payload: { form },
});

export const fillFormStart = () => ({
    type: actionTypes.AUDITORIUM_EDIT_FILL_FORM_START,
});

export const fillFormComplete = auditorium => ({
    type: actionTypes.AUDITORIUM_EDIT_FILL_FORM_COMPLETE,
    payload: { auditorium },
});

export const fillForm = (housingId, auditoriumId) => (dispatch) => {
    dispatch(fillFormStart());

    classroomsApi.get(`api/housings/${housingId}/auditoriums/${auditoriumId}`)
        .then((result) => {
            dispatch(fillFormComplete(result.data));
        })
        .catch(error => console.error(error));
};

export const editAuditoriumStart = () => ({
    type: actionTypes.AUDITORIUM_EDIT_START,
});

export const editAuditoriumComplete = () => ({
    type: actionTypes.AUDITORIUM_EDIT_COMPLETE,
});

export const editAuditorium = (auditorium, callback) => (dispatch) => {
    const validationMessage = validateAuditorium(auditorium);

    if (!validationMessage.isValid) {
        dispatch(setErrorMessage(validationMessage));
        return;
    }

    dispatch(editAuditoriumStart());

    classroomsApi.put(`api/housings/${auditorium.housingId}/auditoriums/${auditorium.id}`, auditorium)
        .then(() => {
            dispatch(editAuditoriumComplete());
            callback();
        })
        .catch((error) => {
            dispatch(setErrorMessage({ summary: error.response.data }));
        });
};

export const removeAuditorium = (housingId, auditoriumId) => (dispatch) => {
    classroomsApi.delete(`api/housings/${housingId}/auditoriums/${auditoriumId}`)
        .then(() => {
            dispatch(fetchAuditoriums(housingId));
        })
        .catch(error => console.error(error));
};
