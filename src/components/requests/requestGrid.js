import React, { Component } from 'react';

import Button from '../button';
import history from '../../history';

class RequestsGrid extends Component {

    handleAddRequest = () => {
        history.push('/requests/new');
    }


    render() {
        return (
            <div className='requests-grid'>
                <Button className='newsletter-grid__button' icon='fas fa-plus' callback={() => this.handleAddRequest()}/>
            </div>
        )
    }
}

export default RequestsGrid;