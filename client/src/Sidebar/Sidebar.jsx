import { useState } from "react";
import {
  Avatar,
  Box,
  ButtonBase,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FlexBetween, KritBox } from "../Assets/Shared/Shared";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { menuSubset } from "./Dataset";
import { motion } from "framer-motion";
import Logo from "../Assets/Images/Logo.png";
import Notes from "../Assets/Images/NotesByKrit.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const desktop = useMediaQuery("(min-width:800px)");

  const DynamicList = ({ Item, size, color }) => {
    return <Item size={size} color={color} />;
  };

const handleClick = (value) =>{
        console.log(value);
}




  return (
    <FlexBetween
      position="sticky"
      left="0"
      top="0"
      flexDirection="column"
      p="0 , 1rem"
      width={open && desktop ? "200px" : "80px"}
      height="100vh"
      sx={{ transition: "all 0.3s" }}
    >
      {/* OPEN/CLOSE BUTTON */}
      <Box display="flex" gap="2rem" flexDirection="column" width="100%">
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
        >
          {open && desktop ? (
            <KritBox flexDirection="row">
              <IconButton padding="1rem" onClick={() => setOpen(!open)}>
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ width: "50px", height: "50px" }}
                />
              </IconButton>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <img
                  src={Notes}
                  alt="Notes"
                  style={{ width: "70px", height: "50px" }}
                />
              </motion.div>
            </KritBox>
          ) : (
            <IconButton onClick={() => setOpen(!open)}>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "50px", height: "50px" }}
              />
            </IconButton>
          )}
        </Box>

        {/* SIDEBAR MENU ITEMS */}
        <Box>
          {menuSubset.map((item) => {
            return (
              <Box
                display="flex"
                justifyContent={open && desktop ? "flex-start" : "center"}
                alignItems="center"
                flexDirection="row"
                key={item.id}
                width="90%"
                padding={open && desktop ? "0.5rem 0.2rem" : "0px"}
              >
                <ButtonBase onClick={()=>handleClick(item.label)}>
                  {!open ? (
                    <Tooltip title={item.label} placement="right">
                      <IconButton>
                        <DynamicList Item={item.value} />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <DynamicList Item={item.value} />
                  )}
                  {open && desktop ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <Typography
                        variant="subtitle"
                        sx={{
                          color: "grey",
                          fontSize: "20px",
                          marginLeft: "10px",
                          padding: "0",
                          cursor: "pointer",
                          fontFamily: "SF Pro Display",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </motion.div>
                  ) : null}
                </ButtonBase>
              </Box>
            );
          })}
        </Box>
      </Box>



      {/* SIDEBAR USER DATA */}
      <Box
        display="flex"
        justifyContent={open && desktop ? "flex-start" : "center"}
        alignItems="center"
        flexDirection="row"
        gap="1rem"
        width="100%"
        p='0.5rem 0'
      >
        <Avatar alt="Image" src={Logo} sx={{ width: "50px", height: "50px" , marginLeft:'10px'}} />
      
                
                {open && desktop ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Box display='flex' justifyContent='center' alignItems='start' flexDirection='column'>              
              <Typography
                variant="subtitle"
                sx={{
                  color: "grey",
                  fontSize: "20px",
                  margin: "0",
                  padding: "0",
                  cursor: "pointer",
                }}
              >
                User Name
              </Typography>
              <Typography variant="body2" sx={{
                  color: "grey",
                  margin:'0'
                }} >
                  Email Id
              </Typography>
              </Box>
            </motion.div>
          ) : null}
      </Box>
    </FlexBetween>
  );
};

export default Sidebar;
