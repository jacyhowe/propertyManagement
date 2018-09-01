import React, { Component } from 'react';

import Button from '../button';
import history from '../../history'; 

import Requests from './requests';
import RequestBoxes from './requestBoxes';


class RequestsGrid extends Component {

    handleAddRequest = () => {
        history.push('/requests/new');
    }


    render() {
        return (
            <div className='requests-grid'>
                <Button className='requests-grid__button' icon='fas fa-plus' callback={() => this.handleAddRequest()}/>
                <RequestBoxes />
                <Requests />
                
            </div>
        )
    }
}

export default RequestsGrid;