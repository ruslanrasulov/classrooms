import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuditoriumForm from './../auditoriumForm';
import HousingForm from './../housingForm';
import HousingList from './../housingList';
import 'reset-css';
import './_styles.scss';

export default (props) => {
    const elements = [];

    for (let index = 0; index < 1000; index++) {
        elements.push(<li key={index}>some element</li>);
    }

    return (
        <main>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route path="/auditoriums/edit/" component={AuditoriumForm} />
                    <Route path="/housings/edit/:id?" render={props => <HousingForm {...props} onSubmit={(values) => console.log(values)} />} />
                    <Route path="/housings" component={HousingList} />
                </Switch>
            </BrowserRouter>
        </main>
    )
};