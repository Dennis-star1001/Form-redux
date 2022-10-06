import { FIRST_NAME, LAST_NAME, ADDRESS, AGE, GENDER } from "./type"
export const firstNameAction = (value) => {
    return {
        type: FIRST_NAME,
        payload: value
    }
}

export const lastNameAction = (value) => {
    return {
        type: LAST_NAME,
        payload: value
    }
}
export const addressAction = (value) => {
    return {
        type: ADDRESS,
        payload: value
    }
}
export const ageAction = (value) => {
    return {
        type: AGE,
        payload: value
    }
}
export const genderAction = (value) => {
    return {
        type: GENDER,
        payload: value
    }
}

