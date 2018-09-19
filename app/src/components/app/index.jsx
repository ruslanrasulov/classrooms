import React from 'react';
import Header from './../header';
import { Switch, Route, Redirect } from 'react-router-dom';
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
            <Switch>
                <Route path="/auditoriums/edit/" exact component={AuditoriumForm} />
                <Route path="/housings/edit/:id?" exact render={props => <HousingForm {...props} onSubmit={(values) => console.log(values)} />} />
                <Route path="/housings" exact component={HousingList} />
                <Redirect to="/" />
            </Switch>
        </main>
    )
};