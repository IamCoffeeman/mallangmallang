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
        backgroundColor: "#F3F6FC",
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
              marginBottom: "50px",
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
                marginBottom: "6%",
                marginTop: "2%",
              }}
            >
              <QuestionField />
            </div>
          </p>
        </Grid>
        {/* <Grid item style={{ width: "70%" }}>
          <Card
            className="Answer"
            sx={{
              borderRadius: 10,
              position: "relative",
              bottom: "60px",
              boxShadow: "none",
            }}
          >
            <PsychologyIcon
              fontSize="large"
              sx={{ margin: "20px", float: "left" }}
            />
            <div
              style={{
                marginLeft: "70px",
                marginRight: "35px",
                marginBottom: "35px",
              }}
            >
              {}
              배달의민족 앱에서 카카오페이로 결제하는 방법은 다음과 같습니다:
              <br />
              배달의민족 앱을 실행합니다. 음식을 선택하고 주문을 진행합니다.
              <br />
              결제 단계에 도달했을 때, '결제하기' 중 '다른 결제수단'을
              <br />
              선택합니다. 여러 결제 옵션 중에서 '카카오페이'를 선택합니다.
              <br />
              이후에 나타나는 지시에 따라 결제를 완료합니다. 이 정보는
              <br />
              배달의민족 앱 내에서 다양한 결제 수단을 사용할 수 있다는 점에
              <br />
              기반을 두고 있습니다. 카카오페이는 그 중 하나의 옵션이며, 이를
              <br />
              선택하여 손쉽게 결제를 진행할 수 있습니다.
              <br />
              선택하여 손쉽게 결제를 진행할 수 있습니다.
              <br />
              선택하여 손쉽게 결제를 진행할 수 있습니다.
              <br />
              <br />
              선택하여 손쉽게 결제를 진행할 수 있습니다.
              <br />
            </div>
          </Card>
        </Grid> */}
      </Grid>
    </Paper>
  );
}

export default Chatting;
