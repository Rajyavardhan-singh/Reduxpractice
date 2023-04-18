import { combineReducers } from "redux";
import UserReducer from './USERS/UserReducer'
import DisplayReducer from "./DISPLAYUSER/DisplayReducer";
const rootReducer = combineReducers(
    { user: UserReducer,
      display: DisplayReducer}
)

export default rootReducer;