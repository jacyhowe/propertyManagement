import React, { Component } from 'react';

import NewNewsletterForm from '../newsletter/newsletterNewForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';


class NewRequest extends Component {

    onSubmit = (fields) => {
        this.props.createNewRequest(this.props._id, {}, () => {
            this.props.history.push('/dashboard');
        })
    };
        
     

     onCancel = () => {
         this.props.history.push('/dashboard');
     }

    render() {
        return(
            <div className='new-request'>
                <NewNewsletterForm 
                onCancel={() => this.onCancel()} 
                onSubmit={(event) => this.onSubmit(event)}
                formTitle='New Request'
                fieldOnePlaceholder='Service Request Title Here'
                fieldOneTitle='Service Request Title'
                fieldTwoPlaceholder='Service Request Description Here'
                fieldTwoTitle='Description'
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { _id } = state.auth.user;
    return { _id }
}
NewRequest = connect(mapStateToProps, actions)(NewRequest);

export default NewRequest;