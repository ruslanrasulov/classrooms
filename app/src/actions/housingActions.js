import classroomsApi from '../utils/classroomsApi';
import * as actionTypes from './actionTypes';

export const fetchHousings = () => dispatch => {
    dispatch(fetchHousingsStart());

    classroomsApi.get('api/housings')
        .then((housings) => {
            dispatch(fetchHousingsComplete(housings.data));
        })
        .catch((error) => console.error(error));
};

export const fetchHousingsStart = () => ({
    type: actionTypes.FETCH_HOUSINGS_START
});

export const fetchHousingsComplete = (housingList) => ({
    type: actionTypes.FETCH_HOUSINGS_COMPLETE,
    payload: { housingList }
});

export const fetchDetailedInfo = () => dispatch => {
    dispatch(fetchDetailedInfoStart());

    classroomsApi.get('api/housings/detailed')
        .then(({ data }) => {
            dispatch(fetchDetailedInfoComplete(data));
        })
        .catch(error => console.error(error));
};

export const fetchDetailedInfoStart = () => ({
    type: actionTypes.FECTH_HOUSINGS_INFO_START
});

export const fetchDetailedInfoComplete = (detailedInfo) => ({
    type: actionTypes.FETCH_HOUSINGS_INFO_COMPLETE,
    payload: { detailedInfo }
});

export const removeHousing = (id) => dispatch => {
    classroomsApi.delete(`api/housings/${id}`)
        .then(result => {
            if (result.status === 200) {
                dispatch(fetchHousings());
            }
        })
        .catch(error => console.error(error));
};

export const removeHousingComplete = id => ({
    type: actionTypes.REMOVE_HOUSING,
    payload: { id }
});

export const updateForm = form => ({
    type: actionTypes.HOUSING_FORM_UPDATE,
    payload: { form }
});

export const addHousing = (housing, callback) => dispatch => {
    classroomsApi.post('api/housings/', housing)
        .then(result => {
            callback();
        })
        .catch(error => {
            dispatch(setErrorMessage(error.response.data));
        });
};

export const editHousing = (housing, callback) => dispatch => {
    dispatch(editHousingStart());

    classroomsApi.put(`api/housings/${housing.id}`, housing)
        .then(result => {
            dispatch(editHousingComplete());
            callback();
        })
        .catch(error => {
            dispatch(setErrorMessage(error.response.data));
        });
};

export const editHousingStart = () => ({
    type: actionTypes.HOUSING_EDIT_START
});

export const editHousingComplete = () => ({
    type: actionTypes.HOUSING_EDIT_COMPLETE
});

export const setErrorMessage = message => ({
    type: actionTypes.HOUSING_FORM_ERROR_MESSAGE,
    payload: { message }
});

export const fillForm = id => dispatch => {
    dispatch(fillFormStart());

    classroomsApi.get(`api/housings/${id}`)
        .then(result => {
            dispatch(fillFormComplete(result.data));
        })
        .catch(error => console.error(error));
};

export const fillFormStart = () => ({
    type: actionTypes.HOUSING_EDIT_FILL_FORM_START
});

export const fillFormComplete = housing => ({
    type: actionTypes.HOUSING_EDIT_FILL_FORM_COMPLETE,
    payload: { housing }
});

export const resetForm = () => ({
    type: actionTypes.HOUSING_RESET_FORM
});