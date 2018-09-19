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
        <div>
            <Header />
            <main className="container">
                <Switch>
                    <Route path="/auditoriums/edit/" exact component={AuditoriumForm} />
                    <Route path="/housings/add" exact component={HousingForm} />
                    <Route path="/housings/edit/:id?" exact component={HousingForm} />} />
                    <Route path="/housings" exact component={HousingList} />
                    <Redirect to="/" />
                </Switch>
            </main>
        </div>
    );
};