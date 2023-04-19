
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
export const DisplayUsers = () => {
  const { user, display } = useSelector((state) => state);
  const displayState = display.display;
  const { isLoading, users, error } = user;
  
  const [expandedUsers, setExpandedUsers] = useState({});
  
  const handleSeeMore = (userId) => {
    setExpandedUsers(prevState => ({
      ...prevState,
      [userId]: !prevState[userId]
    }));
  };

  return (
    <Box sx={{ margin: "0 20px" }}>
      {displayState ? (
        isLoading ? (
          <Paper>
            <Typography textAlign={"center"} bgcolor={"#eeeeee"} variant="h6">
              Loading
            </Typography>
          </Paper>
        ) : error !== "" ? (
          <Paper>
            <Typography
              textAlign={"center"}
              bgcolor={"#ff0000"}
              color={"#ffffff"}
              variant="h6"
            >
              {error}
            </Typography>
          </Paper>
        ) : (
          <Grid
            container
            sx={{
              backgroundColor: "#eeeeee",
                  borderRadius: "20px",
            }}
          >
            {users.map((item) => (
              <Grid
                item
                key={item.id}
                xs={12}
                sm={6}
                lg={4}
                sx={{
                  maxWidth: "450px",
                  minWidth: "250px",
                  height: "auto",
                  padding: "30px",
                  borderRadius: "20px",
                }}
              >
                <Paper
                  elevation={4}
                  sx={{ margin: "auto auto", borderRadius: "20px" }}
                >
                  <Stack m={2} spacing={2} pb={2} pt={2}>
                    <Typography variant="h5" textAlign={"center"}>
                      {item.name}
                    </Typography>
                    <Typography variant="h6">Email : {item.email}</Typography>
                    <Typography variant="h6">
                      Username : {item.username}
                    </Typography>
                    <Typography variant="h6">
                      address : {item.address.suite}, {item.address.street},
                      {item.address.city}
                    </Typography>
                    {!expandedUsers[item.id] ? (
                      <Button
                        onClick={() => handleSeeMore(item.id)}
                        sx={{
                          width: "150px",
                        }}
                        m={2}
                        size="medium"
                        variant="outlined"
                        endIcon={<ExpandMoreIcon/>}
                      >
                        See More
                      </Button>
                    ) : (
                      <>
                        <Typography variant="h6">
                          Works At : {item.company.name}
                        </Typography>
                        <Typography variant="h6">
                          WebSite : {item.website}
                        </Typography>

                        <Button
                          onClick={() => handleSeeMore(item.id)}
                          sx={{
                            width: "150px",
                          }}
                          m={2}
                          size="medium"
                          variant="outlined"
                          endIcon={<ExpandLessIcon/>}
                        >
                          See Less
                        </Button>
                      </>
                    )}
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )
      ) : null}
    </Box>
  );
};
