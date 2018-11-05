import React, { Component } from 'react';
import { addAuditorium, resetForm, updateForm, fillForm, editAuditorium } from '../../actions/auditoriumActions';
import { connect } from 'react-redux';
import spinner from './../../images/spinner.gif';
import { getLoading } from '../../selectors/loadingSelectors';
import { getForm } from '../../selectors/auditoriumSelectors';
import './_styles.scss';

class AuditoriumForm extends Component {
    componentDidMount = () => {
        const {
            fillForm,
            resetForm,
            match: {
                params: { housingId, id }
            }
        } = this.props;

        if (this.isEditForm) {
            fillForm(housingId, id);
        } else {
            resetForm();
        }
    }

    get isEditForm() {
        return this.props.match.params.id !== undefined;
    }

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
            match: { params: { housingId, id } },
            history: { push }
        } = this.props;
        const callback = () => push(`/housings/${housingId}/auditoriums`);

        e.preventDefault();

        if (this.isEditForm) {
            editAuditorium({
                ...form,
                housingId,
                id
            }, callback);
        } else {
            addAuditorium({
                ...form,
                housingId
            }, callback);
        }
    }

    render() {
        const { 
            loading, 
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
            <div>
                {loading ?
                    <img src={spinner} alt="spinner" className="spinner"/> :
                    <form onSubmit={this.handleSubmit} className="auditorium-form">
                        <div>
                            <label className="label" htmlFor="auditorium-number">Auditorium number:</label>
                            <input 
                                type="number" 
                                name="number" 
                                id="auditorium-number" 
                                className="input" 
                                value={number || ''}
                                onChange={this.handleInput} />
                            <span className="validation-message">{numberValidation}</span>
                        </div>
        
                        <div>
                            <label className="label" htmlFor="capacity">Capacity:</label>
                            <input 
                                type="number" 
                                name="capacity" 
                                id="auditorium-capacity" 
                                className="input"
                                value={capacity || ''}
                                onChange={this.handleInput} />
                            <span className="validation-message">{capacityValidation}</span>
                        </div>

                        <div>
                            <label className="label" htmlFor="floor">Floor:</label>
                            <input 
                                type="number" 
                                name="floor" 
                                id="auditorium-floor" 
                                className="input"
                                value={floor || ''}
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
                    </form>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const form = getForm(state);

    return {
        loading: getLoading(state),
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
    resetForm: () => dispatch(resetForm()),
    updateForm: values => dispatch(updateForm(values)),
    fillForm: (housingId, auditoriumId) => dispatch(fillForm(housingId, auditoriumId)),
    editAuditorium: (auditorium, callback) => dispatch(editAuditorium(auditorium, callback))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuditoriumForm);