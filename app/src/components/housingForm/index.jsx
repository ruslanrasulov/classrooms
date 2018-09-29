import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fillForm, updateForm, resetForm, addHousing, editHousing } from '../../actions/housingActions';
import spinner from './../../images/spinner.gif';

class HousingForm extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;

        if (this.isEditMode) {
            this.props.fillForm(id);
        } else {
            this.props.resetForm();
        }
    }

    get isEditMode() { 
        return this.props.match.params.id !== undefined; 
    }

    handleInput = e => {
        const { name, value } = e.target;

        this.props.updateForm({ [name]: value });
    }

    handleSubmit = e => {
        const { 
            addHousing, 
            editHousing, 
            form, 
            match: { params: { id } },
            history: { push }
        } = this.props;
        e.preventDefault();

        if (this.isEditMode) {
            editHousing({ ...form, id }, () => push('/housings'));
        } else {
            addHousing(form);
        }
    }

    render() {
        const { number, validationMessage, isLoading } = this.props;

        return (
            <div>
                {isLoading ? 
                    <img src={spinner} alt="spinner" className="spinner"/> :
                    <form className="housing-form" onSubmit={this.handleSubmit}>
                        <input type="hidden" name="housing-id" />
                        <div>
                            <label htmlFor="housing-number">Number:</label>
                            <input 
                                type="number" 
                                name="number" 
                                id="housing-number" 
                                className="housing-form__input-number"
                                onChange={this.handleInput} 
                                value={number || ''} />
                        </div>
                        <span className="housing-form__validation-message">{validationMessage}</span>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.housings.isLoading,
    number: state.housings.form.number,
    form: state.housings.form,
    validationMessage: state.housings.form.validationMessage
});

const mapDispatchToProps = dispatch => ({
    updateForm: values => dispatch(updateForm(values)),
    addHousing: form => dispatch(addHousing(form)),
    editHousing: (form, callback) => dispatch(editHousing(form, callback)),
    fillForm: id => dispatch(fillForm(id)),
    resetForm: () => dispatch(resetForm())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HousingForm);