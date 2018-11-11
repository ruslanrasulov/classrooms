import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getForm } from '../../selectors/housingSelectors';
import { updateForm, addHousing, editHousing } from '../../actions/housingActions';

class HousingFormElement extends Component {
    handleInput = e => {
        const { name, value } = e.target;

        this.props.updateForm({ [name]: value });
    }

    handleSubmit = e => {
        const { 
            addHousing, 
            editHousing, 
            form, 
            housingId,
            history: { push },
            isEditMode
        } = this.props;

        const callback = () => push('/housings');
        
        e.preventDefault();

        if (isEditMode) {
            editHousing({ ...form, housingId }, callback);
        } else {
            addHousing(form, callback);
        }
    }

    render() {
        const {
            number,
            numberValidationMsg,
            validationSummary
        } = this.props;

        return (
            <form className="housing-form" onSubmit={this.handleSubmit}>
                <input type="hidden" name="housing-id" />
                <div>
                    <label className="label" htmlFor="housing-number">Number:</label>
                    <input 
                        type="number" 
                        name="number" 
                        id="housing-number" 
                        className="input"
                        onChange={this.handleInput} 
                        value={number || ''} />
                    <span className="validation-message">{numberValidationMsg}</span>
                </div>
                <div className="validation-summary">
                    <span className="validation-message">{validationSummary}</span>
                </div>
                <div>
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    const form = getForm(state);

    return {
        number: form.number,
        numberValidationMsg: form.validation.number,
        validationSummary: form.validation.summary,
        form
    };
};

const mapDispatchToProps = dispatch => ({
    updateForm: values => dispatch(updateForm(values)),
    addHousing: (form, callback) => dispatch(addHousing(form, callback)),
    editHousing: (form, callback) => dispatch(editHousing(form, callback))
});

const ConnectedElement = connect(
    mapStateToProps,
    mapDispatchToProps
)(HousingFormElement);

export default withRouter(ConnectedElement);