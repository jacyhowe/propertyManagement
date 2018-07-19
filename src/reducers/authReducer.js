import {
    AUTHENTICATE_USER
} from '../actions/types';

const INTITAL_STATE = {
    authenticated: false,
    user: []    
}

export default function(state = INTITAL_STATE, action){

    switch (action.type) {
        case AUTHENTICATE_USER:
            const { user } = action.payload
            return {
                ...state,
                authenticated: true,
                user
            }   
        default: return state;
    }
}