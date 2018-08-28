import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class RequestsBox extends Component {
    
    render() {
        const { title, count } = this.props;
        const className = `requests-box ${this.props.selectedRequestType == title ? 'requests-box-active' : 'requests-box-inactive'}`
        
    
        return(
        <div onClick={() => this.props.changeSelectedRequestType(title)} className={className}>
            <div className="requests-box__count">{count}</div>
            <div className="requests-box__title">{title}</div>
            <div className="requests-box__point"></div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectedRequestType } = state.requests;
    return { selectedRequestType };
}

RequestsBox = connect(mapStateToProps, actions)(RequestsBox);

export default RequestsBox;