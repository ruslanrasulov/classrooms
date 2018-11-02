import React, { Component } from 'react';
import { addAuditorium, resetForm, updateForm, fillForm, editAuditorium } from '../../actions/auditoriumActions';
import { connect } from 'react-redux';
import spinner from './../../images/spinner.gif';
import { getLoading } from '../../selectors/loadingSelectors';
import { getForm } from '../../selectors/auditoriumSelectors';

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
            validationMessage 
        } = this.props;

        return (
            <div>
                {loading ?
                    <img src={spinner} alt="spinner" className="spinner"/> :
                    <form onSubmit={this.handleSubmit} className="auditorium-form">
                        <div>
                            <label htmlFor="auditorium-number">Auditorium number:</label>
                            <input 
                                type="number" 
                                name="number" 
                                id="auditorium-number" 
                                className="auditorium-form__input-number" 
                                value={number || ''}
                                onChange={this.handleInput} />
                        </div>
        
                        <div>
                            <label htmlFor="capacity">Capacity:</label>
                            <input 
                                type="number" 
                                name="capacity" 
                                id="auditorium-capacity" 
                                className="auditorium-form__input-capacity"
                                value={capacity || ''}
                                onChange={this.handleInput} />
                        </div>

                        <div>
                            <label htmlFor="floor">Floor:</label>
                            <input 
                                type="number" 
                                name="floor" 
                                id="auditorium-floor" 
                                className="auditorium-form__input-floor"
                                value={floor || ''}
                                onChange={this.handleInput} />
                        </div>
        
                        <div>
                            <label htmlFor="type">Type:</label>
                            <select 
                                name="type" 
                                id="auditorium-type" 
                                className="auditorium-form__input-type"
                                value={type || 0}
                                onChange={this.handleInput} >
                                <option value="0">Lecture</option>
                                <option value="1">Computer</option>
                                <option value="2">Laboratory</option>
                            </select>
                        </div>
                        <span className="auditorium-form__validation-message">{validationMessage}</span>
                        <button type="submit" className="auditorium-form__submit-btn">Submit</button>
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
        validationMessage: form.validationMessage,
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