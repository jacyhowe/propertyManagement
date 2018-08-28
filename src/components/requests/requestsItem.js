import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component {

    render() {
        return (
            <div className='requests-item'>
                    <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle'/>    
                    <div className='requests-item__title'>
                        Broken Door Knob
                    </div>
                    <div className='requests-item__tenant-unit'>
                        Jacy - Unit 1811
                    </div>  
                    <Icon className='requests-item__arrow' icon='fas fa-sort-down'/>
                    <div className='requests-item__date'>
                        06/02/91
                    </div>
                    <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('trying to change request item status')}/>                    
            </div>
        )
    }
}

export default RequestsItem;