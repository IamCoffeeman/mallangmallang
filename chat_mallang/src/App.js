import "./App.css";
import React from "react";
import MenuAppBar from "./component/navbox";
import Chatting from "./component/chatting";
import QuestionField from "./component/searchbox";
import { Paper } from "@mui/material";

function App() {
  return (
    <Paper sx={{ backgroundColor: "#F3F6FC", overflowX: "hidden" }}>
      <header className="App-header">
        <MenuAppBar />
      </header>
      <div style={{ width: "100%" }}>
        <Chatting />
      </div>
    </Paper>
  );
}
export default App;
