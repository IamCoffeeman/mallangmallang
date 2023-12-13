import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./index.css";
import Divider from "@mui/material/Divider";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        marginTop: "-1.5%",
        height: "100px",
        flexGrow: 1,
        width: "73%",
      }}
    >
      <AppBar
        position="static"
        sx={{
          position: "relative",
          left: "19.5%",
          backgroundColor: "white",
          // backgroundColor: "#F3F6FC",
          boxShadow: "none",
          // borderRadius: 10,
          color: "#C7DCA7",
          // border: "1px",
          // borderStyle: "none none solid none",
          marginTop: "15px",
        }}
      >
        <Toolbar className="navbar">
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            <p style={{ fontSize: "1.5em" }}>
              <strong>DAPPHAGO</strong>
            </p>
          </Typography>
          {true && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              USER1
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Divider
        sx={{
          position: "relative",
          left: "19.5%",
          top: "-20px",
          borderBottomWidth: 5,
          borderRadius: 10,
          // backgroundColor: "#AFC8AD",
        }}
      />
    </Box>
  );
}
