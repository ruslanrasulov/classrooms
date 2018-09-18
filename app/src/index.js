import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app';
import AuditoriumForm from './components/auditoriumForm';
import HousingForm from './components/housingForm';
import HousingList from './components/housingList';
import configureStore from './store/configureStore';

const store = configureStore();

const Root = 
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/auditoriums/edit/" component={AuditoriumForm} />
                <Route path="/housings/edit/:id?" render={props => <HousingForm {...props} onSubmit={(values) => console.log(values)} />} />
                <Route path="/housings" component={HousingList} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>

ReactDOM.render(
    Root,
    document.getElementById('root'));