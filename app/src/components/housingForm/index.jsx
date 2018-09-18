import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Multiselect } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

const MultiselectWrapper = props => {
    return (
        <Multiselect 
            data={[{ id: 1, label: '123'}, { id: 2, label: '234' }]} 
            
            {...props} />
    )
};

const HousingForm = ({ handleSubmit, pristine, submitting, onSubmit, ...props }) => (
    <form onSubmit={handleSubmit((values) => { console.debug(values); })}>
        <div>
            <label htmlFor="housing-number">Housing number:</label>
            <Field name="housingNumber" component="input" type="text" />
        </div>
        
        <div>
            <label htmlFor="housing-auditoriums">Audiroriums</label>
            <Field 
                name="housingAuditoriums"  
                component={Multiselect}  
                defaultValue={[]}
                data={[{ id: 1, label: '123'}, { id: 2, label: '234' }]} 
                valueField="id"
                textField="label" />
        </div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
    </form>
);

export default reduxForm({
    form: 'HousingForm'
})(HousingForm);