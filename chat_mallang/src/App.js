import "./App.css";
import React from "react";
import MenuAppBar from "./component/navbox";
import Grid from "@mui/material/Grid";
import Chatting from "./component/chatting";
import QuestionField from "./component/searchbox";
import { Card } from "@mui/material";
import Paper from "@mui/material/Paper";

function App() {
  return (
    <div className="App">
      <header className="App-header" sx={{ borderRadius: 5 }}>
        <MenuAppBar />
      </header>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Grid item xs={12}>
          <div className="chattingField">
            <Chatting />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              width: 1355,
              height: 150,
              position: "relative",
              bottom: 90,
            }}
          >
            <QuestionField />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

// <Grid
//   style={{
//     height: "151px",
//     width: "80%",
//     backgroundColor: "#F3F6FC",
//     zIndex: 2,
//     position: "relative",
//     bottom: "89px",
//   }}
// >
//   <QuestionField />
// </Grid>
export default App;
