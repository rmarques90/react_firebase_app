import { ADD_LOGGED_USER } from '../actions/actionTypes';

const initialState = {
    nome: '',
    email: '',
    token: '',
    uid: ''
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOGGED_USER:
            return {
                ...state,
                nome: '2',
                email: '3',
                token: '4',
                uid: '5'
                
            };
        default:
            return state;
    }
};