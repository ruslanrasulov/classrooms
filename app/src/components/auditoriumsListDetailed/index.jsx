import React from 'react';

export default props => {
    const auditoriums = [
        {
            number: 1,
            housingNumber: 1,
            floor: 2,
            capacity: 50,
            type: 'computer'
        },
        {
            number: 2,
            housingNumber: 1,
            floor: 2,
            capacity: 50,
            type: 'computer'
        },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>Auditorium number</th>
                    <th>Housing number</th>
                    <th>Floor</th>
                    <th>Capacity</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {auditoriums.map(a => (
                    <tr>
                        <th>{a.number}</th>
                        <th>{a.housingNumber}</th>
                        <th>{a.floor}</th>
                        <th>{a.capacity}</th>
                        <th>{a.type}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}