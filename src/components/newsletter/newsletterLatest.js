import React, { Component } from 'react';

function Button({className, callback, text, icon}){
    if(icon) {
        return (
            <a onClick={callback} className={`${className} button`}>
                <i className={icon}></i>
            </a>
        )
    }
}

class NewsletterLatest extends Component {
    handleEdit = () => {
        console.log('trying to handle edit');
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