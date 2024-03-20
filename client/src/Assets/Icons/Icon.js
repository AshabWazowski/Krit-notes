import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EditNoteIcon from "@mui/icons-material/EditNote";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";


export const HomeOutline = ({size, color, }) =>{
    return <HomeOutlinedIcon sx={{fontSize:{size}, color:{color}}}/>
}
export const EditNote = ({size, color, }) =>{
    return <EditNoteIcon sx={{fontSize:{size}, color:{color}}}/>
}
export const BookmarkOutline = ({size, color, }) =>{
    return <BookmarkBorderOutlinedIcon sx={{fontSize:{size}, color:{color}}}/>
}

export const Darkmode = ({size, color, }) =>{
    return <DarkModeIcon sx={{fontSize:{size}, color:{color}}}/>
}
export const Lightmode = ({size, color, }) =>{
    return <LightModeIcon sx={{fontSize:{size}, color:{color}}}/>
}
