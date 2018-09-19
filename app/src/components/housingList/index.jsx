import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeHousing } from './../../actions/housingActions';
import './_styles.scss';

class HousingList extends Component {
    render() {
        const { housings, removeHousing } = this.props;
        
        return (
            <div className="housing-list">
                <nav className="housing-list__nav">
                    <Link to="/housings/add" className="housing-list__add-button">Add a new housing</Link>
                </nav>
                <ul>
                    {housings.map(housing => (
                        <li key={housing.number} className="housing-list__item">
                            <span className="housing-list__item__name">Housing number: {housing.number}</span>
                            <div className="housing-list__item__buttons">
                                <Link to={`/housings/${housing.number}/auditoriums`} className="housing-list__item__button">Detailed info</Link>
                                <Link to={`/housings/edit/${housing.number}`} className="housing-list__item__button">Edit</Link>
                                <button className="housing-list__item__button" type="button" onClick={() => removeHousing(housing.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    housings: state.housings
});

const mapDispatchToProps = dispatch => ({
    removeHousing: id => dispatch(removeHousing(id))
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(HousingList);