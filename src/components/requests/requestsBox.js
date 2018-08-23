import React, { Component } from 'react';

class RequestsBox extends Component {
    
    render() {
        const { title, count } = this.props;
        
    
        return(
        <div onClick={(title) => this.props.changeSelectedRequestType(title)} className='requests-box requests-box-inactive'>
            <div className="requests-box__count">{count}</div>
            <div className="requests-box__title">{title}</div>
            <div className="requests-box__point"></div>
        </div>
        )
    }
}

export default RequestsBox;