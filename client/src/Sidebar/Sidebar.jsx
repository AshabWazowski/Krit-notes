import { useState } from "react";
import { Avatar, Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { FlexBetween, KritBox } from "../Assets/Shared/Shared";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

// MUI Icons


// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import HomeIcon from "@mui/icons-material/Home";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";



const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <FlexBetween
      position="sticky"
      left="0"
      top="0"
      flexDirection="column"
      // p='1rem'
      width={open ? "250px" : "80px"}
      height="100vh"
      sx={{ backgroundColor: "#d1b6e8", transition: "all 0.3s" }}
    >
      {/* OPEN/CLOSE BUTTON */}
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        padding='1rem'
      >
        {open ? (
          <IconButton onClick={() => setOpen(!open)}>
            <CloseIcon sx={{ color: "grey", fontSize: "30px" }} />
          </IconButton>
        ) : (
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon sx={{ color: "grey", fontSize: "30px" }} />
          </IconButton>
        )}
      </Box>

      {/* SIDEBAR MENU ITEMS */}

      <h1>Hello</h1>

      {/* SIDEBAR USER DATA */}
      <KritBox flexDirection="row">
        <Avatar
        alt="Image"
        src=''
        sx={{width:'56px', height:'56px'}}
        />
      </KritBox>
    </FlexBetween>
  );
};

export default Sidebar;
