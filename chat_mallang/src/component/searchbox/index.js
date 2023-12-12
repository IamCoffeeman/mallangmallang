import { React, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";

function QuestionField() {
  const [searchValue, setSearchValue] = useState("");
  const [req, setReq] = useState([
    "질문을 입력하면 답변이 20초 내로 AI가 응답합니다.",
    "ex) 카카오톡 사용 방법을 모르겠어",
  ]);

  const InputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmit = () => {
    setReq();
    axios
      .get("http://127.0.0.1:8000/", {
        params: {
          qes: searchValue,
        },
      })
      .then(function (request) {
        setReq(request.data.split("\n"));
        console.log(request.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
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
      <Card
        className="Answer"
        sx={{
          // height: !req ? "608px" : null,
          minHeight: "607px",
          width: "100%",
          marginTop: "25px",
          borderRadius: 10,
          position: "relative",
          right: "0.8%",
          boxShadow: "none",
        }}
      >
        <PsychologyIcon
          fontSize="large"
          sx={{ margin: "20px", float: "left" }}
        />
        <ul
          style={{
            listStyleType: "none",
            marginLeft: "70px",
            marginRight: "35px",
            marginBottom: "35px",
          }}
        >
          {!req ? (
            <CircularProgress
              color="inherit"
              size="10rem"
              thickness={7}
              sx={{ marginLeft: "37%", marginTop: "20%" }}
            />
          ) : (
            req.map((val, key) => <li key={key}>{val}</li>)
          )}
        </ul>
      </Card>
    </div>
  );
}

export default QuestionField;
