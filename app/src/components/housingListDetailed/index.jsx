import React from 'react';

export default props => {
    const housings = [
        {
            number: 1,
            lectureCapacity: 50,
            computerCapacity: 50,
            laboratoryCapacity: 100,
            totalCapacity: 200,
        },
        {
            number: 2,
            lectureCapacity: 50,
            computerCapacity: 50,
            laboratoryCapacity: 100,
            totalCapacity: 200,
        },
    ];

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Housing number</th>
                        <th>Capacity of lecture auditoriums</th>
                        <th>Capacity of computer auditoriums</th>
                        <th>Capacity of laboratory auditoriums</th>
                        <th>Total capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {housings.map(h => (
                        <tr>
                            <th>{h.number}</th>
                            <th>{h.lectureCapacity}</th>
                            <th>{h.computerCapacity}</th>
                            <th>{h.laboratoryCapacity}</th>
                            <th>{h.totalCapacity}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}