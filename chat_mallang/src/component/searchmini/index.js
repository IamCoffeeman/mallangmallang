import * as React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Card } from "@mui/material";
import { Button } from "@mui/base";

function MiniSearch() {
  return (
    <Card
      sx={{
        position: "fixed",
        width: "6%",
        height: "12%",
        display: "flex",
        borderRadius: 10,
        opacity: 1,
      }}
    >
      <IconButton type="button" sx={{ marginLeft: "25%" }} aria-label="search">
        <SearchIcon fontSize="large" />
      </IconButton>
    </Card>
  );
}

export default MiniSearch;
