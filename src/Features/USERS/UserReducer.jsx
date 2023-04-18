
import {
  USERS_FETCHED_FAILED,
  USERS_FETCHED_SUCCESSFULY,
  USERS_FETCHING_STARTED,
} from "./Constants";

const intialState = {
  isLoading: false,
  users: [],
  error: "",
};

const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    case USERS_FETCHING_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case USERS_FETCHED_SUCCESSFULY:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };

    case USERS_FETCHED_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;