import {firebaseAuth} from '../utils/firebase';
import { ADD_LOGGED_USER } from './actionTypes';

export const signUp = async (email, password) => {
    try {
        let response = await firebaseAuth.createUserWithEmailAndPassword(email, password);
        console.log("Uusario registrado", response);
    } catch (err) {
        console.error("Error registering user", err);
        throw err;
    }
}

export const login = async (email, password) => {
    try {
        let response = await firebaseAuth.signInWithEmailAndPassword(email, password);
        console.log("Uusario logado", response);
    } catch (err) {
        console.error("Error login user", err);
        throw err;
    }
}

export const logout = async () => {
    try {
        let response = await firebaseAuth.signOut();
        console.log("Uusario logado", response);
    } catch (err) {
        console.error("Error login user", err);
        throw err;
    }
}

const addLoggedUser = (user) => ({  
        type: ADD_LOGGED_USER,
        payload: user
})