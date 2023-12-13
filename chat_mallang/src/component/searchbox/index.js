import { React, useState, useRef, useEffect, Fragment } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ServeyList from "../servey/index";
function QuestionField() {
  const [searchValue, setSearchValue] = useState("");
  const [req, setReq] = useState([
    "질문을 입력하면 답변이 20초 내로 AI가 응답합니다.",
    "ex) 카카오톡 사용 방법을 모르겠어",
  ]);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("body");

  const handleClickOpen = (scrollType) => () => {
    onSubmit();
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

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
    <Card
      sx={{
        backgroundColor: "#F8FFD2",
        borderRadius: 10,
        boxShadow: "none",
        minHeight: "780px",
        position: "relative",
        // bottom: "9%",
      }}
    >
      <Paper
        sx={{
          marginTop: "20px",
          width: "93%",
          height: "87px",
          display: "flex",
          borderRadius: 10,
          opacity: 1,
          boxShadow: "1px 2px 9px #C7DCA7",
          position: "relative",
          left: "3.6%",
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
          onClick={handleClickOpen("body")}
        >
          <SearchIcon fontSize="large" />
        </IconButton>
      </Paper>
      <Card
        className="Answer"
        sx={{
          // height: !req ? "608px" : null,
          minHeight: "607px",
          width: "93%",
          marginTop: "25px",
          borderRadius: 10,
          position: "relative",
          left: "3%",
          // backgroundColor: "#F3F6FC",
          boxShadow: "5px 5px 9px #C7DCA7",
          // boxShadow: "none",
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
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <p style={{ fontSize: "30px", marginBottom: "7px" }}>
            응답을 불러오는 동안 간단한 <br />
            설문 부탁드립니다.
          </p>
          <p style={{ fontSize: "15px" }}>
            사용자의 응답이 기준으로 교육이나 향후 서비스에 반영됩니다.
          </p>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <ServeyList />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>제출</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default QuestionField;
