import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAuditoriums, removeAuditorium } from './../../actions/auditoriumActions';
import Modal from '../modal';
import spinner from './../../images/spinner.gif';
import './_styles.scss';

class AuditoriumsList extends Component {
    state = {
        showModal: false
    };

    showModal = (id) => {
        this.setState({
            showModal: true,
            auditoriumId: id
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    }

    handleSubmit = (auditoriumId) => {
        const {
            removeAuditorium,
            match: {
                params: { housingId }
            }
        } = this.props;

        removeAuditorium(housingId, auditoriumId);
        this.closeModal();
    }

    componentDidMount() {
        const { 
            loadAuditoriums, 
            match: {
                params: { housingId }
            }
        } = this.props;

        loadAuditoriums(housingId);
    }

    render() {
        const { 
            isLoading, 
            auditoriums,
            match: { params: { housingId } }
        } = this.props;
        const { auditoriumId } = this.state;

        return (
            <div>
                {isLoading ? 
                    <img src={spinner} alt="spinner" className="spinner"/> : 
                    <div className="auditoriums">
                    <nav className="auditoriums__nav">
                        <Link to={`/housings/${housingId}/auditoriums/add`} className="auditoriums__add-button">Add a auditorium</Link>
                    </nav>
                    <table className="auditoriums__list">
                        <thead>
                            <tr>
                                <th>Auditorium number</th>
                                <th>Capacity</th>
                                <th>Floor</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {auditoriums.map(a => (
                                <tr key={a.id}>
                                    <th>{a.number}</th>
                                    <th>{a.capacity}</th>
                                    <th>{a.floor}</th>
                                    <th>{a.type}</th>
                                    <th>
                                        <Link to={`/housings/${housingId}/auditoriums/${a.id}/edit`}>Edit</Link>
                                        <button type="button" onClick={() => this.showModal(a.id)}>Remove</button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Modal 
                        visible={this.state.showModal}
                        title="Are you sure?"
                        text="Are you sure to remove this auditorium?"
                        onSubmit={() => this.handleSubmit(auditoriumId)}
                        onClose={this.closeModal} />
                </div>
                }   
            </div>
        );
    }
};

const mapStateToProps = state => ({
    isLoading: state.auditoriums.isLoading,
    auditoriums: state.auditoriums.auditoriumList
});

const mapDispatchToProps = dispatch => ({
    loadAuditoriums: housingId => dispatch(fetchAuditoriums(housingId)),
    removeAuditorium: (housingId, auditoriumId) => dispatch(removeAuditorium(housingId, auditoriumId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(AuditoriumsList);