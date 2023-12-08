import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function QuestionField() {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100px",
        display: "flex",
        borderRadius: 10,
        opacity: 1,
        boxShadow: "none",
        // bgcolor: "#F3F6FC",
      }}
    >
      <InputBase
        sx={{ ml: 10, flex: 1, fontSize: "1em" }}
        placeholder="질문을 입력하세요."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ mr: 10 }} aria-label="search">
        <SearchIcon fontSize="large" />
      </IconButton>
    </Paper>
  );
}

export default QuestionField;
