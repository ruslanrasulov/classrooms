import React from 'react';
import Header from './../header';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuditoriumForm from './../auditoriumForm';
import HousingForm from './../housingForm';
import HousingList from './../housingList';
import HousingsListDetailed from './../housingListDetailed';
import AuditoriumsList from './../auditoriumsList';
import AuditoriumsListDetailed from '../auditoriumsListDetailed';
import 'reset-css';
import 'font-awesome/css/font-awesome.min.css';
import './_styles.scss';

export default (props) => {
    return (
        <div>
            <Header />
            <main className="container">
                <Switch>
                    <Route path="/housings/:housingId/auditoriums/add" exact component={AuditoriumForm} />
                    <Route path="/housings/:housingId/auditoriums/:id/edit" exact component={AuditoriumForm} />
                    <Route path="/housings/auditoriums/detailed-info" exact component={AuditoriumsListDetailed} />
                    <Route path="/housings/detailed-info" exact component={HousingsListDetailed} />
                    <Route path="/housings/add" exact component={HousingForm} />
                    <Route path="/housings/edit/:id" exact component={HousingForm} />} />
                    <Route path="/housings/:id/auditoriums" exact component={AuditoriumsList} />
                    <Route path="/housings" exact component={HousingList} />
                    <Redirect to="/" />
                </Switch>
            </main>
        </div>
    );
};