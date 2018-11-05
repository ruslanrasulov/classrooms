import React from 'react';
import { Link } from 'react-router-dom';
import './_styles.scss';

export default props => (
    <header className="header">
        <div className="header__container">
            <Link to="/housings">Classrooms</Link>
        </div>
    </header>
);