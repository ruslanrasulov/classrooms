import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetailedInfo } from './../../actions/auditoriumActions';
import spinner from  './../../images/spinner.gif';
import { getLoading } from '../../selectors/loadingSelectors';
import typeMapping from '../../utils/auditoriumTypes.enum';
import { getDetailedInfo } from '../../selectors/auditoriumSelectors';

class AuditoriumsListDetailed extends Component {
    componentDidMount() {
        this.props.loadDetailedInfo();
    }

    render() {
        const { loading, detailedInfo } = this.props;

        return (
            <div>
                {loading ?
                    <img src={spinner} alt="spinner" className="spinner"/> :
                    <table className="table__list">
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
                                    <th>{typeMapping[a.type]}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    detailedInfo: getDetailedInfo(state),
    loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
    loadDetailedInfo: () => dispatch(fetchDetailedInfo())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuditoriumsListDetailed);