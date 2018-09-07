import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequestsItem from './requestsItem';

class Requests extends Component {
    render() {
        return (
            <div className='requests'>
            {
                this.props.requests.map(requestsItem => {
                    return <RequestsItem {...requestsItem} key={requestsItem._id}/>
                })               
            }
            </div>
        )
    }
}
function mapStateToProps(state){
    const { requests } = state.requests;
    return {
        requests
    }
}
export default connect(mapStateToProps)(Requests);