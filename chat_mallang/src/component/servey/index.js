import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";

export default function ServeyList() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        당신의 성별은 무엇입니까?
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="남성" control={<Radio />} label="male" />
        <FormControlLabel value="여성" control={<Radio />} label="female" />
      </RadioGroup>
      <Divider sx={{ margin: "15px" }} />
      <FormLabel id="demo-row-radio-buttons-group-label">
        거주 지역이 어디십니까?
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="수도권" control={<Radio />} label="Seoul" />
        <FormControlLabel value="경기도" control={<Radio />} label="Gyeonggi" />
        <FormControlLabel
          value="충청도"
          control={<Radio />}
          label="Chungcheong"
        />
        <FormControlLabel
          value="경상도"
          control={<Radio />}
          label="Gyeongsang"
        />
        <FormControlLabel value="전라도" control={<Radio />} label="Jeolla" />
        <FormControlLabel control={<Radio />} label="other" />
      </RadioGroup>
      <Divider sx={{ margin: "15px" }} />
      <FormLabel id="demo-row-radio-buttons-group-label">질문3</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="남성" control={<Radio />} label="male" />
        <FormControlLabel value="여성" control={<Radio />} label="female" />
      </RadioGroup>
      <Divider sx={{ margin: "15px" }} />
      <FormLabel id="demo-row-radio-buttons-group-label">질문4</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="남성" control={<Radio />} label="male" />
        <FormControlLabel value="여성" control={<Radio />} label="female" />
      </RadioGroup>
      <Divider sx={{ margin: "15px" }} />
      <FormLabel id="demo-row-radio-buttons-group-label">질문5</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="남성" control={<Radio />} label="male" />
        <FormControlLabel value="여성" control={<Radio />} label="female" />
      </RadioGroup>
      <Divider sx={{ margin: "15px" }} />
      <FormLabel id="demo-row-radio-buttons-group-label">질문6</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="남성" control={<Radio />} label="male" />
        <FormControlLabel value="여성" control={<Radio />} label="female" />
      </RadioGroup>
      <Divider sx={{ margin: "15px" }} />
    </FormControl>
  );
}
