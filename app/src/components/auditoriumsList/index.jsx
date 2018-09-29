import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAuditoriums } from './../../actions/auditoriumActions';
import spinner from './../../images/spinner.gif';
import './_styles.scss';

class AuditoriumsList extends Component {
    componentDidMount() {
        const { loadAuditoriums, match } = this.props;
        loadAuditoriums(match.params.id);
    }

    render() {
        const { 
            isLoading, 
            auditoriums,
            match: { params: { id: housingId } }
        } = this.props;

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
                                        <button type="button">Remove</button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    isLoading: state.auditoriums.isLoading,
    auditoriums: state.auditoriums.auditoriumList
});

const mapDispatchToProps = dispatch => ({
    loadAuditoriums: housingId => dispatch(fetchAuditoriums(housingId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(AuditoriumsList);