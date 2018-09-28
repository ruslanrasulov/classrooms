import { createStore, applyMiddleware, compose }  from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';
import initialState from './../reducers/initialState'

const middlewares = applyMiddleware(thunk);
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const enhancers = compose(middlewares, reduxDevTools);

const configureStore = () => createStore(
    rootReducer,
    initialState,
    enhancers
);

export default configureStore;