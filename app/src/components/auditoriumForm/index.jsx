import React, { Component } from 'react';

class AuditoriumForm extends Component {
    render() {
        return (
            <form onSubmit={() => {}} className="auditorium-form">
                <div>
                    <label htmlFor="auditorium-number">Auditorium number:</label>
                    <input type="number" name="number" id="auditorium-number" className="auditorium-form__input-number" />
                </div>

                <div>
                    <label htmlFor="capacity">Capacity:</label>
                    <input type="number" name="capacity" id="auditorium-capacity" className="auditorium-form__input-capacity"/>
                </div>

                <div>
                    <label htmlFor="type">Type:</label>
                    <select name="type" id="auditorium-type" className="auditorium-form__input-type">
                        <option value="0">Lecture</option>
                        <option value="1">Computer</option>
                        <option value="2">Laboratory</option>
                    </select>
                </div>

                <button type="submit" className="auditorium-form__submit-btn">Submit</button>
            </form>
        )
    }
}

export default AuditoriumForm;