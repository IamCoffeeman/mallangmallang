import { React, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

function QuestionField() {
  const [searchValue, setSearchValue] = useState("");

  const InputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmit = () => {
    axios
      .get("http://127.0.0.1:8000/", {
        params: {
          qes: searchValue,
        },
      })
      .then(function (request) {
        console.log(request.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
        value={searchValue}
        onChange={InputChange}
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton
        type="button"
        sx={{ mr: 10 }}
        aria-label="search"
        onClick={onSubmit}
      >
        <SearchIcon fontSize="large" />
      </IconButton>
    </Paper>
  );
}

export default QuestionField;
