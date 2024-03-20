import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EditNoteIcon from "@mui/icons-material/EditNote";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";


export const HomeOutline = ({size, color, }) =>{
    return <HomeOutlinedIcon sx={{fontSize:'30px', color:'grey'}}/>
}
export const EditNote = ({size, color, }) =>{
    return <EditNoteIcon sx={{fontSize:'30px', color:'grey'}}/>
}
export const BookmarkOutline = ({size, color, }) =>{
    return <BookmarkBorderOutlinedIcon sx={{fontSize:'30px', color:'grey'}}/>
}

export const Darkmode = ({size, color, }) =>{
    return <DarkModeIcon sx={{fontSize:'30px', color:'grey'}}/>
}
export const Lightmode = ({size, color, }) =>{
    return <LightModeIcon sx={{fontSize:'30px', color:'grey'}}/>
}
