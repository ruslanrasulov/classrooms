import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetailedInfo } from './../../actions/auditoriumActions';
import spinner from  './../../images/spinner.gif';

class AuditoriumsListDetailed extends Component {
    componentDidMount() {
        this.props.loadDetailedInfo();
    }

    render() {
        const { isLoading, detailedInfo } = this.props;
        return (
            <div>
                {isLoading ?
                    <img src={spinner} alt="spinner" className="spinner"/> :
                    <table>
                        <thead>
                            <tr>
                                <th>Auditorium number</th>
                                <th>Housing number</th>
                                <th>Floor</th>
                                <th>Capacity</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailedInfo.map(a => (
                                <tr key={a.number}>
                                    <th>{a.number}</th>
                                    <th>{a.housingNumber}</th>
                                    <th>{a.floor}</th>
                                    <th>{a.capacity}</th>
                                    <th>{a.type}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    detailedInfo: state.auditoriums.detailedInfo,
    fetchDetailed: state.auditoriums.isLoading
});

const mapDispatchToProps = dispatch => ({
    loadDetailedInfo: () => dispatch(fetchDetailedInfo())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuditoriumsListDetailed);