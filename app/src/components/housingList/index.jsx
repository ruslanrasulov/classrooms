import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeHousing, fetchHousings } from '../../actions/housingActions';
import Modal from '../modal';
import Spinner from  '../spinner';
import { getLoading } from '../../selectors/loadingSelectors';
import { getHousingList } from '../../selectors/housingSelectors';
import './_styles.scss';

class HousingList extends Component {
    state = {
        showModal: false
    };

    showModal = (id) => {
        this.setState({
            showModal: true,
            housingId: id
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    }

    handleSubmit = (id) => {
        this.props.removeHousing(id);
        this.closeModal();
    }

    componentDidMount() {
        this.props.loadHousings();
    }

    render() {
        const { housings, loading } = this.props;
        const { housingId } = this.state;
        
        return (
            <div className="housing-list">
                {loading ? 
                    <Spinner /> :
                    <div>
                        <nav className="housing-list__nav">
                            <Link 
                                to="/housings/add" 
                                className="btn housing-list__button">
                                Add a new housing
                            </Link>
                            <Link 
                                to="/housings/auditoriums/detailed-info" 
                                className="btn housing-list__button">
                                Show auditoriums detailed info
                            </Link>
                            <Link 
                                to={`/housings/detailed-info`} 
                                className="btn housing-list__button">
                                Show housings detailed info
                            </Link>
                        </nav>
                        <ul>
                            {housings.map(housing => (
                                <li key={housing.number} className="housing-list__item">
                                    <span className="housing-list__item__name">
                                        Housing number: {housing.number}
                                    </span>
                                    <div className="housing-list__item__buttons">
                                        <Link 
                                            to={`/housings/${housing.id}/auditoriums`} 
                                            className="btn housing-list__item__button">
                                            Show auditoriums
                                        </Link>
                                        <Link 
                                            to={`/housings/edit/${housing.id}`} 
                                            className="btn housing-list__item__button">
                                            Edit
                                        </Link>
                                        <button 
                                            className="btn housing-list__item__button" 
                                            type="button" 
                                            onClick={() => this.showModal(housing.id)}>
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <Modal 
                            visible={this.state.showModal}
                            title="Are you sure?"
                            text="Are you sure to remove this housing?"
                            onSubmit={() => this.handleSubmit(housingId)}
                            onClose={this.closeModal} />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    housings: getHousingList(state),
    loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
    removeHousing: (id) => dispatch(removeHousing(id)),
    loadHousings: () => dispatch(fetchHousings())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(HousingList);
