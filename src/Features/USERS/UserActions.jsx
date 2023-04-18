import { USERS_FETCHED_FAILED, USERS_FETCHED_SUCCESSFULY, USERS_FETCHING_STARTED } from "./Constants";

export function fetchingUser(){
    return {
        type:USERS_FETCHING_STARTED
    }
}

export function userSuccess(users){
    return {
        type:USERS_FETCHED_SUCCESSFULY,
        payload:users
    }
}

export function userFailed(error){
    return {
        type:USERS_FETCHED_FAILED,
        payload:error
    }
}
