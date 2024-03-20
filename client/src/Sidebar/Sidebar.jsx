import { useState } from "react";
import { Avatar, Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { FlexBetween, KritBox } from "../Assets/Shared/Shared";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { menuSubset } from "./Dataset";
import {motion} from 'framer-motion';



const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const desktop = useMediaQuery("(min-width:800px)");


  const DynamicList = ({Item, size, color}) =>{
    return <Item size={size} color={color}/>
  }

  return (
    <FlexBetween
      position="sticky"
      left="0"
      top="0"
      flexDirection="column"
      p='0 , 1rem'
      width={open && desktop ? "250px" : "80px"}
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

      {menuSubset.map((item)=>{
        return(
          <Box display='flex' justifyContent='flex-start' alignItems='center' flexDirection='row' key={item.id} gap='0.3rem' width='100%'>
          <IconButton>
            <DynamicList Item={item.value} size='30px'/>
          </IconButton>
          {open ? 
            <motion.div
            initial={{opacity:0, scale:0}}
             animate={{opacity:1, scale:1}}
             transition={{
                duration: 0.3,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            >
            <Typography variant="subtitle" sx={{color:'grey' , fontSize:'20px', margin:'0', padding:'0'}}>{item.label}</Typography>
            </motion.div>
            : null}
          </Box>
        )
      })}

      {/* SIDEBAR USER DATA */}
      <KritBox flexDirection="row" p='1rem 0'>
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
