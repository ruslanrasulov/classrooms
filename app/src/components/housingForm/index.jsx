import React, { Component } from 'react';
import Spinner from '../spinner';
import HousingFormElement from '../housingFormElement';
import { connect } from 'react-redux';
import { getLoading } from '../../selectors/loadingSelectors';
import { 
    fillForm, 
    resetForm,
} from '../../actions/housingActions';

class HousingForm extends Component {
    componentDidMount() {
        const { fetchHousing, reset } = this.props;

        if (this.isEditMode) {
            fetchHousing(this.housingId);
        } else {
            reset();
        }
    }

    get isEditMode() {
        return this.housingId !== undefined; 
    }

    get housingId() {
        return this.props.match.params.id;
    }

    render() {
        const { 
            loading,
            match: { params: { id } }
        } = this.props;

        return (
            <div>
                {loading 
                    ? <Spinner /> 
                    : <HousingFormElement isEditMode={this.isEditMode} housingId={id}/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({ 
    loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
    fetchHousing: id => dispatch(fillForm(id)),
    reset: () => dispatch(resetForm())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HousingForm);