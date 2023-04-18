import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
export const Header = () => {
  return (
    <Stack
      bgcolor="#eeeeee"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px 20px",
        borderBottomRightRadius: "5px",
        borderBottomLeftRadius: "5px",
        position:'sticky',
        top:'0px',
        zIndex:'9'
      }}
    >
      {/* <Typography
        variant="h4"
        sx={{
          border: "2px solid black",
          borderRadius: "20px",
          padding: "5px",
        }}
      >
        USERLIST{" "}
      </Typography> */}
      <Button  size="large" disableRipple>
        <Typography  color={"black"} variant="h4">USERLIST </Typography>
      </Button>
      <Box>There</Box>
       
    </Stack>
  );
};
