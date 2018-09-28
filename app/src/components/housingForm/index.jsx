import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForm, addHousing } from '../../actions/housingActions';

class HousingForm extends Component {
    handleInput = e => {
        const { name, value } = e.target;

        this.props.updateForm({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addHousing(this.props.form);
    }

    render() {
        const { number, validationMessage } = this.props;

        return (
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
            </form>
        );
    }
}

const mapStateToProps = state => ({
    number: state.housings.form.number,
    form: state.housings.form,
    validationMessage: state.housings.form.validationMessage
});

const mapDispatchToProps = dispatch => ({
    updateForm: values => dispatch(updateForm(values)),
    addHousing: form => dispatch(addHousing(form))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HousingForm);