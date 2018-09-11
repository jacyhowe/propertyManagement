import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequestsBox from './requestsBox';
import { request } from 'http';


class RequestBoxes extends Component {
    render() {
        return (
            <div className='request-boxes'>
                 <RequestsBox title='Pending' count={this.props.pendingCount}/>
                <RequestsBox title='In-progess' count={this.props.progressCount}/>
                <RequestsBox title='Complete' count={this.props.completeCount}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { requests } = state.requests;

    var pendingCount = 0;
    var progressCount = 0;
    var completeCount = 0;

        requests.map(request => {
            if(request.status == 'pending') {
                pendingCount += 1;
            } else if(request.status == 'progress') {
                progressCount += 1;
            } else if(request.status == 'complete') {
                completeCount += 1;
            }
        })
        return {
            pendingCount,
            progressCount,
            completeCount
    }
}

RequestBoxes = connect(mapStateToProps)(RequestBoxes);

export default RequestBoxes;