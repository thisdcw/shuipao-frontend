import {UserType} from "../models/user.d";

let currentUser: UserType;

const setCurrentUserState = (user) => {
    currentUser = user
}
const getCurrentUserState = (): UserType => {
    return currentUser
}

export {
    setCurrentUserState,
    getCurrentUserState
}