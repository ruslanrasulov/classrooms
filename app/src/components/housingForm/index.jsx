import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';

const SelectInput = (props) => {
    const { input } = props;
    
    return (
        <Select 
            isMulti
            {...input}
            {...props}
            onChange={(value) => {input.onChange(value)}}
            onBlur={() => { }} /> 
    );
};

const HousingForm = ({ handleSubmit, pristine, submitting, onSubmit }) => (
    <form onSubmit={handleSubmit((values) => { return { housingAuditoriums: values.housingAuditoriums.map(h => h.value), ...values } })}>
        <div>
            <label htmlFor="housing-number">Housing number:</label>
            <Field name="housingNumber" component="input" type="text" />
        </div>
        
        <div>
            <label htmlFor="housing-auditoriums">Audiroriums</label>
            <Field 
                name="housingAuditoriums"  
                component={SelectInput}
                options={[{ value: 1, label: '123'}, { value: 2, label: '234' }]} />
        </div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
    </form>
);

export default reduxForm({
    form: 'HousingForm'
})(HousingForm);