import * as actionTypes from '../actions/actionTypes';

const housingReducer = (state = {}, action) => {
    const actionType = action.type;
    
    switch (actionType) {
        case actionTypes.FETCH_HOUSINGS_COMPLETE: {
            const { housingList } = action.payload;

            return {
                ...state,
                housingList
            };
        }
        case actionTypes.FETCH_HOUSINGS_INFO_COMPLETE: {
            const { detailedInfo } = action.payload;
            
            return {
                ...state,
                detailedInfo
            };
        }
        case actionTypes.HOUSING_FORM_UPDATE: {
            const { form } = action.payload;

            return {
                ...state,
                form
            }
        }
        case actionTypes.HOUSING_FORM_ERROR_MESSAGE: {
            const { message } = action.payload;

            return {
                ...state,
                form: {
                    ...state.form,
                    validationMessage: message
                }
            }
        }
        case actionTypes.HOUSING_EDIT_FILL_FORM_COMPLETE: {
            const { housing } = action.payload; 

            return {
                ...state,
                form: housing
            }
        }
        case actionTypes.HOUSING_RESET_FORM: {
            return {
                ...state,
                form: { }
            }
        }
        default: {
            return state;
        }
    }
};

export default housingReducer;