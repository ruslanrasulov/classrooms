import React from 'react';
import { Link } from 'react-router-dom';
import './_styles.scss';

const Header = () => (
    <header className="header">
        <div className="header__container">
            <Link to="/housings">Classrooms</Link>
        </div>
    </header>
);

export default Header;