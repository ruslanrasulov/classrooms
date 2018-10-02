import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchHousings = () => dispatch => {
    dispatch(fetchHousingsStart());

    axios.get('http://localhost:50505/api/housings').then((housings) => {
        dispatch(fetchHousingsComplete(housings.data));
    }).catch((error) => console.log(error));
};

export const fetchHousingsStart = () => ({
    type: actionTypes.FETCH_HOUSINGS_START,
    payload: { isLoading: true }
});

export const fetchHousingsComplete = (housingList) => ({
    type: actionTypes.FETCH_HOUSINGS_COMPLETE,
    payload: {
        isLoading: false,
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
        isLoading: true
    }
});

export const fetchDetailedInfoComplete = (detailedInfo) => ({
    type: actionTypes.FETCH_HOUSINGS_INFO_COMPLETE,
    payload: {
        isLoading: false,
        detailedInfo
    }
});

export const removeHousing = (id) => dispatch => (
    axios.delete(`http://localhost:50505/api/housings/${id}`)
        .then(result => {
            if (result.status === 200) {
                dispatch(fetchHousings());
            }
        })
);

export const removeHousingComplete = id => ({
    type: actionTypes.REMOVE_HOUSING,
    payload: {
        id
    }
});

export const updateForm = form => ({
    type: actionTypes.HOUSING_FORM_UPDATE,
    payload: { form }
});

export const addHousing = (housing, callback) => dispatch => {
    axios.post('http://localhost:50505/api/housings/', housing)
        .then(result => {
            callback();
        })
        .catch(error => {
            dispatch(setErrorMessage(error.response.data));
        })
}

export const editHousing = (housing, callback) => dispatch => {
    dispatch(editHousingStart());

    axios.put(`http://localhost:50505/api/housings/${housing.id}`, housing)
        .then(result => {
            dispatch(editHousingComplete());
            callback();
        })
        .catch(error => {
            dispatch(setErrorMessage(error.response.data));
        })
}

export const editHousingStart = () => ({
    type: actionTypes.HOUSING_EDIT_START
});

export const editHousingComplete = () => ({
    type: actionTypes.HOUSING_EDIT_COMPLETE
});

export const setErrorMessage = message => ({
    type: actionTypes.HOUSING_FORM_ERROR_MESSAGE,
    payload: {
        message
    }
})

export const fillForm = id => dispatch => {
    dispatch(fillFormStart());

    axios.get(`http://localhost:50505/api/housings/${id}`)
        .then(result => {
            dispatch(fillFormComplete(result.data));
        })
}

export const fillFormStart = () => ({
    type: actionTypes.HOUSING_EDIT_FILL_FORM_START
});

export const fillFormComplete = housing => ({
    type: actionTypes.HOUSING_EDIT_FILL_FORM_COMPLETE,
    payload: {
        housing
    }
});

export const resetForm = () => ({
    type: actionTypes.HOUSING_RESET_FORM
});