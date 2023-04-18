import fetchUsers from "../Features/USERS/fetchUsers";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Button, Stack } from "@mui/material";
import { useDispatch} from "react-redux";
import { removeDisplay ,displayLoading} from "../Features/DISPLAYUSER/displayActions";
import {  useSelector } from "react-redux";



const Buttons = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const {  users } = user;
  console.log(users)
  return (
    <Stack direction="row" spacing={4} p={2} justifyContent={"center"}>
      <Button
        variant="contained"
        size="large"
        endIcon={<SupervisedUserCircleIcon />}
        onClick={() => users.length==0 ? (dispatch(fetchUsers())) :(dispatch(displayLoading())) }
      >
        Get users
      </Button>
      <Button onClick={()=> dispatch(removeDisplay())}>close user List</Button>
    </Stack>
  );
};

export default Buttons;
