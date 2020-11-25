import {createStore} from "redux";
import {constants} from "../constants/constants";

const initialState = {
    employees: [],
    birthday: [],
    alphabet: constants
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_EMPLOYEES':
            return {...state, employees: action.payload};
        case 'GET_BIRTHDAY':
            return {...state, birthday: action.payload};

        default:
            return state;
    }
};
export const store = createStore(reducer);