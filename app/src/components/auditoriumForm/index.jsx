import React, { Component } from 'react';
import Spinner from '../spinner';
import AuditoriumFormElement from '../auditoriumFormElement';
import { resetForm, fillForm } from '../../actions/auditoriumActions';
import { connect } from 'react-redux';
import { getLoading } from '../../selectors/loadingSelectors';
import './_styles.scss';

class AuditoriumForm extends Component {
    componentDidMount = () => {
        const { fetchAuditorium, reset } = this.props;

        if (this.isEditMode) {
            fetchAuditorium(this.housingId, this.auditoriumId);
        } else {
            reset();
        }
    }

    get isEditMode() {
        return this.auditoriumId !== undefined;
    }

    get housingId() {
        return this.props.match.params.housingId;
    }

    get auditoriumId() {
        return this.props.match.params.id;
    }
    
    render() {
        const { 
            loading, 
        } = this.props;

        return (
            <div>
                {loading 
                    ? <Spinner /> 
                    : <AuditoriumFormElement isEditMode={this.isEditMode} />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(resetForm()),
    fetchAuditorium: (housingId, auditoriumId) => dispatch(fillForm(housingId, auditoriumId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuditoriumForm);