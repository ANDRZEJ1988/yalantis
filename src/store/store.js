import {createStore} from "redux";
import {alphabet} from "../constants/alphabet";

const initialState = {
    employees: [],
    birthday: [],
    alphabet: alphabet
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_EMPLOYEES':
            return {...state, employees: action.payload};
        default:
            return state;
    }
};
export const store = createStore(reducer);