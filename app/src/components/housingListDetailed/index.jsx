import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetailedInfo } from './../../actions/housingActions';
import Spinner from  '../spinner';
import { getLoading } from '../../selectors/loadingSelectors';
import { getDetailedInfo } from '../../selectors/housingSelectors';

class HousingListDetailed extends Component {
    componentDidMount() {
        this.props.loadDetailedInfo();
    }

    renderCountPerTypes = countPerType => {
        const keys = Object.keys(countPerType);
        const items = [];

        for (let i = 0; i < keys.length; i++) {
            items.push(
                <li key={i}>{`${keys[i]}: ${countPerType[keys[i]]}`}</li>
            )
        }

        return <ul>{items}</ul>;
    }

    render() {
        const { detailedInfo, loading } = this.props;

        return (
            <div>
                {loading ? 
                    <Spinner /> :
                    <div>
                        <table className="table__list">
                            <thead>
                                <tr>
                                    <th>Housing number</th>
                                    <th>Capacity per type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {detailedInfo.map(h => (
                                    <tr key={h.number}>
                                        <th>{h.number}</th>
                                        <th>{this.renderCountPerTypes(h.countPerType)}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>}
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
)(HousingListDetailed);