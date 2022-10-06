
import { FIRST_NAME, LAST_NAME, AGE, ADDRESS, GENDER } from "../actions/type"

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    age: '',
    address: '',
    gender: ''
}

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FIRST_NAME:
            return {
                ...state, firstName: action.payload
            };
        case LAST_NAME:
            return {
                ...state, lastName: action.payload
            };

        case ADDRESS:
            return {
                ...state, address: action.payload
            }
        case AGE:
            return {
                ...state, age: action.payload
            }
        case GENDER:
            return {
                ...state, gender: action.payload
            }


        default:
            return state;
    }
}

export default formReducer;