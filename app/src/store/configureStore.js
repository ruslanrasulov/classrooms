import { createStore, applyMiddleware, compose }  from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(thunk);

const configureStore = () => createStore(
    rootReducer,
    compose(middlewares, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default configureStore;