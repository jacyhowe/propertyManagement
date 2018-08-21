import React, { Component } from 'react';

import Button from '../button';

import history from '../../history';

class NewsletterLatest extends Component {
    handleEdit = () => {
        history.push(`/newsletter/edit/${this.props._id}`);
    }
    render() {
        const { title, body, imageUrl } = this.props;
        return (
            <div className="newsletter-latest">
                <div className="newsletter-latest__title">{title}</div>
                <img className="newsletter-latest__image" src={imageUrl}/>
                <Button className='newsletter-latest__button' callback={() => this.handleEdit()} icon='fas fa-pencil-alt'/>
                <div className="newsletter-latest__body">
                   <p>{body}</p>
                </div>
            </div>
        )
    }
}



export default NewsletterLatest;