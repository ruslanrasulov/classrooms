import React from 'react';
import { Link } from 'react-router-dom';
import './_styles.scss';

export default props => {
    const auditoriums = [
        {
            number: 1,
            capacity: 10,
            floor: 5,
            type: 'computer'
        },
        {
            number: 2,
            capacity: 10,
            floor: 5,
            type: 'lecture'
        },
        {
            number: 3,
            capacity: 10,
            floor: 5,
            type: 'labaratory'
        },
    ];

    return (
        <div className="auditoriums">
            <nav className="auditoriums__nav">
                <Link to="/auditoriums/add" className="auditoriums__add-button">Add a auditorium</Link>
            </nav>
            <table className="auditoriums__list">
                <thead>
                    <tr>
                        <th>Auditorium number</th>
                        <th>Capacity</th>
                        <th>Floor</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {auditoriums.map(a => (
                        <tr>
                            <th>{a.number}</th>
                            <th>{a.capacity}</th>
                            <th>{a.floor}</th>
                            <th>{a.type}</th>
                            <th>
                                <Link to={`/auditoriums/edit/${a.number}`}>Edit</Link>
                                <button type="button">Remove</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};