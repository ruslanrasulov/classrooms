import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeHousing } from './../../actions/housingActions';

class HousingList extends Component {
    render() {
        const { housings, removeHousing } = this.props;
        
        return (
            <ul>
                {housings.map(housing => (
                    <li>
                        Housing number: {housing.number}
                        <button type="button" onClick={() => removeHousing(housing.id)}>Remove</button>
                    </li>
                ))}
            </ul>
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