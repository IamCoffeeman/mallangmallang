import "./App.css";
import React from "react";
import MenuAppBar from "./component/navbox";
import Chatting from "./component/chatting";
import QuestionField from "./component/searchbox";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import MiniSearch from "./component/searchmini";

function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY === 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, [window.scrollY]);

  return (
    <Paper sx={{ backgroundColor: "#F3F6FC", overflowX: "hidden" }}>
      <header className="App-header">
        <MenuAppBar />
      </header>
      <div style={{ width: "100%" }}>
        <Chatting />
      </div>
      {/* {visible ? (
        <div
          style={{
            position: "relative",
            bottom: "320px",
            zIndex: "2",
          }}
        >
          <QuestionField />
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            left: "91%",
            bottom: "320px",
            zIndex: "2",
          }}
        >
          <MiniSearch />
        </div>
      )} */}
    </Paper>
  );
}
export default App;
