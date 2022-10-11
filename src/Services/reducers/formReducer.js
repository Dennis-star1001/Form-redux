
import { BIO_DATA } from "../actions/type"

const INITIAL_STATE = {
    bioDataState: {
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        gender: ''
    }

}

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BIO_DATA:
            return {
                ...state, bioDataState: action.payload
            };

        default:
            return state;
    }
}

export default formReducer;