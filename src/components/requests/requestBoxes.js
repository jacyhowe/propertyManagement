import React, { Component } from 'react';

import RequestsBox from './requestsBox';

class RequestBoxes extends Component {
    render() {
        return (
            <div className='request-boxes'>
                 <RequestsBox title='Pending' count={9}/>
                <RequestsBox title='In-progess' count={3}/>
                <RequestsBox title='Complete' count={5}/>
            </div>
        )
    }
}

export default RequestBoxes;