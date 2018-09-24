import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeHousing, fetchHousings } from './../../actions/housingActions';
import spinner from  './../../images/spinner.gif';
import './_styles.scss';

class HousingList extends Component {
    componentDidMount() {
        this.props.loadHousings();
    }

    render() {
        const { housings, removeHousing, fetchHousings } = this.props;
        
        return (
            <div className="housing-list">
                {fetchHousings ? 
                    <img src={spinner} alt="spinner" className="spinner"/> :
                    <div>
                        <nav className="housing-list__nav">
                            <Link to="/housings/add" className="housing-list__add-button">Add a new housing</Link>
                        </nav>
                        <ul>
                            {housings.map(housing => (
                                <li key={housing.number} className="housing-list__item">
                                    <span className="housing-list__item__name">Housing number: {housing.number}</span>
                                    <div className="housing-list__item__buttons">
                                        <Link to={`/housings/${housing.id}/auditoriums`} className="housing-list__item__button">Detailed info</Link>
                                        <Link to={`/housings/edit/${housing.id}`} className="housing-list__item__button">Edit</Link>
                                        <button className="housing-list__item__button" type="button" onClick={() => removeHousing(housing.id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        );
    };
};

const mapStateToProps = state => ({
    housings: state.housings.housingList,
    fetchHousings: state.housings.fetchHousings
});

const mapDispatchToProps = dispatch => ({
    removeHousing: id => dispatch(removeHousing(id)),
    loadHousings: () => dispatch(fetchHousings())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(HousingList);