import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getForm } from '../../selectors/auditoriumSelectors';
import { addAuditorium, updateForm, editAuditorium } from '../../actions/auditoriumActions';
import NumberField from '../numberField';

class AuditoriumFormElement extends Component {
    handleInput = e => {
        const { name, value } = e.target;

        this.props.updateForm({
            [name]: value
        });
    }

    handleSubmit = e => {
        const {
            addAuditorium,
            editAuditorium,
            form,
            isEditMode,       
            match: { params: { housingId, id } },
            history: { push }
        } = this.props;
        const callback = () => push(`/housings/${housingId}/auditoriums`);

        e.preventDefault();

        if (isEditMode) {
            editAuditorium({ ...form, housingId, id }, callback);
        } else {
            addAuditorium({ ...form, housingId }, callback);
        }
    }

    render() {
        const {
            number,
            capacity,
            floor,
            type,
            validationSummary,
            numberValidation,
            capacityValidation,
            floorValidation,
            typeValidation
        } = this.props;

        return (
            <form onSubmit={this.handleSubmit} className="auditorium-form">
                <div>
                    <label className="label" htmlFor="auditorium-number">Auditorium number:</label>
                    <NumberField 
                        type="number" 
                        name="number" 
                        id="auditorium-number" 
                        value={number}
                        onChange={this.handleInput} />
                    <span className="validation-message">{numberValidation}</span>
                </div>

                <div>
                    <label className="label" htmlFor="capacity">Capacity:</label>
                    <NumberField 
                        type="number" 
                        name="capacity" 
                        id="auditorium-capacity" 
                        value={capacity}
                        onChange={this.handleInput} />
                    <span className="validation-message">{capacityValidation}</span>
                </div>

                <div>
                    <label className="label" htmlFor="floor">Floor:</label>
                    <NumberField
                        type="number" 
                        name="floor"
                        id="auditorium-floor" 
                        value={floor}
                        onChange={this.handleInput} />
                    <span className="validation-message">{floorValidation}</span>
                </div>

                <div>
                    <label className="label" htmlFor="type">Type:</label>
                    <select 
                        name="type" 
                        id="auditorium-type" 
                        className="input"
                        value={type || 0}
                        onChange={this.handleInput} >
                        <option value="0">Lecture</option>
                        <option value="1">Computer</option>
                        <option value="2">Laboratory</option>
                    </select>
                    <span className="validation-message">{typeValidation}</span>
                </div>
                <div className="validation-summary">
                    <span className="validation-message">{validationSummary}</span>
                </div>
                <button type="submit" className="btn auditorium-form__submit-btn">Submit</button>
            </form>
        );
    }    
}

const mapStateToProps = state => {
    const form = getForm(state);

    return {
        number: form.number,
        capacity: form.capacity,
        floor: form.floor,
        type: form.type,
        validationSummary: form.validation.summary,
        numberValidation: form.validation.number,
        capacityValidation: form.validation.capacity,
        floorValidation: form.validation.floor,
        typeValidation: form.validation.type,
        form
    };
};
const mapDispatchToProps = dispatch => ({
    addAuditorium: (auditorium, callback) => dispatch(addAuditorium(auditorium, callback)),
    updateForm: values => dispatch(updateForm(values)),
    editAuditorium: (auditorium, callback) => dispatch(editAuditorium(auditorium, callback))
});

const ConnectedElement = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuditoriumFormElement);

export default withRouter(ConnectedElement);