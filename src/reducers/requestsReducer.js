import {
    CHANGE_SELECTED_REQUEST_TYPE
} from '../actions/types';

const INTITAL_STATE = {
    requests: [],
    selectedRequest: 'pending'      
}

export default function(state = INTITAL_STATE, action){

    switch (action.type) {
        case CHANGE_SELECTED_REQUEST_TYPE:
            const selectedRequest= action.payload
            return {
                ...state,
                selectedRequest: boxType
            }   
        default: return state;
    }
}