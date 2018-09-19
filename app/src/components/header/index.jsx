import React from 'react';
import HousingList from './../housingList';
import { Link } from 'react-router-dom';
import './_styles.scss';

export default props => (
    <header className="header">
        <div className="header__container">
            <Link to="/">Classrooms</Link>
        </div>
    </header>
);