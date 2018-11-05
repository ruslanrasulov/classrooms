import React, { Component } from 'react';
import { connect } from 'react-redux';
import spinner from './../../images/spinner.gif';
import { getLoading } from '../../selectors/loadingSelectors';
import { getForm } from '../../selectors/housingSelectors';
import { 
    fillForm, 
    updateForm, 
    resetForm, 
    addHousing, 
    editHousing 
} from '../../actions/housingActions';

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
        const callback = () => push('/housings');
        
        e.preventDefault();

        if (this.isEditMode) {
            editHousing({ ...form, id }, callback);
        } else {
            addHousing(form, callback);
        }
    }

    render() {
        const { 
            number,
            numberValidation,
            validationSummary, 
            loading 
        } = this.props;

        return (
            <div>
                {loading ? 
                    <img src={spinner} alt="spinner" className="spinner"/> :
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
                                <span className="validation-message">{numberValidation}</span>
                        </div>
                        <div className="validation-summary">
                            <span className="validation-message">{validationSummary}</span>
                        </div>
                        <div>
                            <button className="btn" type="submit">Submit</button>
                        </div>
                    </form>}
            </div>
        );
    }
}

const mapStateToProps = state => { 
    const form = getForm(state);

    return {
        loading: getLoading(state),
        number: form.number,
        numberValidation: form.validation.number,
        validationSummary: form.validation.summary,
        form
    }
};

const mapDispatchToProps = dispatch => ({
    updateForm: values => dispatch(updateForm(values)),
    addHousing: (form, callback) => dispatch(addHousing(form, callback)),
    editHousing: (form, callback) => dispatch(editHousing(form, callback)),
    fillForm: id => dispatch(fillForm(id)),
    resetForm: () => dispatch(resetForm())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HousingForm);