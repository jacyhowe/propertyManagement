import React, { Component } from 'react';

class NewsletterLatest extends Component {
    render() {
        const { title, body, imageUrl } = this.props;
        return (
            <div className="newsletter-latest">
                <div className="newsletter-latest__title">{title}</div>
                <img className="newsletter-latest__image" src={imageUrl}/>
                <div className="newsletter-latest__body">
                   <p>{body}</p>
                </div>
            </div>
        )
    }
}

export default NewsletterLatest;