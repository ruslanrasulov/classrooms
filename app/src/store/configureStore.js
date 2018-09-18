import { createStore, applyMiddleware }  from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';

const configureStore = () => createStore(
    rootReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;