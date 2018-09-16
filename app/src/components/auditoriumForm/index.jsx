import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AuditoriumForm = ({ handleSubmit, pristine, submitting, onSubmit }) => (
    <form onSubmit={handleSubmit((values) => { console.log(values); })}>
        <div>
            <label htmlFor="auditorium-number">Auditorium number:</label>
            <Field name="auditoriumNumber" component="input" type="text" />
        </div>

        <div>
            <label htmlFor="capacity">Capacity:</label>
            <Field name="capacity" component="input" type="number" />
        </div>
        <div>
            <label htmlFor="type">Type:</label>
            <Field name="type" component="select" />
        </div>
        <div>
            <label htmlFor="housing">Housing:</label>
            <Field name="housing" component="select" />
        </div>

        <button type="submit" disabled={pristine || submitting}>Submit</button>
    </form>
);

export default reduxForm({
    form: 'AuditoriumForm'
})(AuditoriumForm);