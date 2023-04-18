import axios from "axios";
import { fetchingUser, userFailed, userSuccess } from "./UserActions";
import { displayLoading } from "../DISPLAYUSER/displayActions";

function fetchUsers() {
  return function (dispatch) {
    dispatch(displayLoading());
    dispatch(fetchingUser());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        // console.log(users);
        dispatch(userSuccess(users));
      })
      .catch((error) => {
        dispatch(userFailed(error.message));
      });
  };
}

export default fetchUsers;
