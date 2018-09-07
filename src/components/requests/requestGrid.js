import React, { Component } from 'react';

import Button from '../button';
import history from '../../history'; 

import Requests from './requests';
import RequestBoxes from './requestBoxes';

import { connect } from 'react-redux';
import * as actions from '../../actions';


class RequestsGrid extends Component {

    handleAddRequest = () => {
        history.push('/requests/new');
    }

    componentDidMount(){
        this.props.fetchRequest()
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

RequestsGrid = connect(null, actions)(RequestsGrid);

export default RequestsGrid;