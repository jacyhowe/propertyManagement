import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component {

    render() {
        return (
            <div className='requests-item'>
                    <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle'/>    
                    <div className='requests-item__title'>
                        <div className='requests-item__title__text'>Broken Door Knob</div>
                    <Icon className='requests-item__title__arrow' icon='fas fa-sort-down'/>
                    </div>
                    <div className='requests-item__tenant-unit'>
                        Jacy - Unit 1811
                    </div>  
                    
                    <div className='requests-item__date'>
                        06/02/91
                    </div>
                    <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('trying to change request item status')}/> 
                    <div className='requests-item__description'>
                        <img 
                            className='requests-item-description-image'
                            src='http://via.placeholder.com/160x94'                            
                        />
                        <p className='requests-item__description-text'>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </p>
                    </div>                   
            </div>
        )
    }
}

export default RequestsItem;