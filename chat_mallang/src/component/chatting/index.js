import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./index.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QuestionField from "../searchbox";

function Chatting() {
  return (
    <Paper
      sx={{
        width: "105%",
        boxShadow: "none",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          width: "100%",
          fontSize: "1.5em",
          lineHeight: 2.25,
          overflow: "scroll",
          overflowX: "hidden",
          position: "relative",
          left: "-30px",
        }}
      >
        <Grid item style={{ width: "70%" }}>
          <p
            className="Question"
            style={{
              marginLeft: "35px",
              marginRight: "35px",
              // marginBottom: "50px",
            }}
          >
            {/* <AccountCircleIcon
              fontSize="large"
              sx={{ marginTop: "20px", marginRight: "20px" }}
            /> */}
            {/* <span
              style={{ position: "relative", top: "-4px", fontSize: "1.6em" }}
            >
              배달의민족에서 카카오페이 결제 하는 방법 알려줘.
            </span> */}
            <div
              style={{
                position: "relative",
                right: "2%",
                // marginBottom: "6%",
                marginTop: "2.5%",
              }}
            >
              <QuestionField />
            </div>
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Chatting;
