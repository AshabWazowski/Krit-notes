import React from 'react'
import { Box } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';



const Main = () => {
  return (
    <Box display='flex'>
    <Box>
      <Sidebar/>
    </Box>

      <Box
       width='300px'
       sx={{backgroundColor:'yellowgreen'}}
      >

      </Box>

      
      <Box>
        <h1>Home</h1>
      </Box>
    </Box>
  )
}

export default Main