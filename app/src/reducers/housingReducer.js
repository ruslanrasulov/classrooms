import * as actionTypes from '../actions/actionTypes';

const housingReducer = (state = {}, action) => {
    const actionType = action.type;
    
    switch (actionType) {
        case actionTypes.REMOVE_HOUSING: {
            const { id } = action.payload;
            
            return state.filter(housing => housing.id !== id);
        }
        case actionTypes.FETCH_HOUSINGS_START: {
            const { isLoading } = action.payload;
            return {
                isLoading,
                ...state
            }
        }
        case actionTypes.FETCH_HOUSINGS_COMPLETE: {
            const { housingList, isLoading } = action.payload;

            return {
                ...state,
                housingList,
                isLoading,
            };
        }
        case actionTypes.FECTH_HOUSINGS_INFO_START: {
            const { isLoading } = action.payload;
            
            return {
                ...state,
                isLoading
            };
        }
        case actionTypes.FETCH_HOUSINGS_INFO_COMPLETE: {
            const { detailedInfo, isLoading } = action.payload;
            
            return {
                ...state,
                isLoading,
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
                    validationMessage: message
                }
            }
        }
        case actionTypes.HOUSING_EDIT_FILL_FORM_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actionTypes.HOUSING_EDIT_FILL_FORM_COMPLETE: {
            const { housing } = action.payload; 

            return {
                ...state,
                isLoading: false,
                form: housing
            }
        }
        case actionTypes.HOUSING_RESET_FORM: {
            return {
                ...state,
                isLoading: false,
                form: { }
            }
        }
        case actionTypes.HOUSING_EDIT_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actionTypes.HOUSING_EDIT_COMPLETE: {
            return {
                ...state,
                isLoading: false
            }
        }
        default: {
            return state;
        }
    }
};

export default housingReducer;