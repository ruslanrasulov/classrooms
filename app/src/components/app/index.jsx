import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header';
import AuditoriumForm from '../auditoriumForm';
import HousingForm from '../housingForm';
import HousingList from '../housingList';
import HousingsListDetailed from '../housingListDetailed';
import AuditoriumsList from '../auditoriumsList';
import AuditoriumsListDetailed from '../auditoriumsListDetailed';
import 'reset-css';
import './_styles.scss';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
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
                    <Route path="/housings/edit/:id" exact component={HousingForm} />
                    <Route path="/housings/:housingId/auditoriums" exact component={AuditoriumsList} />
                    <Route path="/housings" exact component={HousingList} />
                    <Redirect to="/housings" />
                </Switch>
            </main>
        </div>
    );
};

export default App;
