import React from 'react';
import TextField from '@mui/material/TextField'
import IconButton from "@mui/material/IconButton";
// import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "@mui/icons-material/Search";
import Button from '@mui/material/Button';
import './Secondsection.css'
function SecondSection() {
  return (
    <div className="Section2-main">
        <div className="Section2-innerContainer">
        <div className="Section2-Search">
        <div >
   <TextField
   sx={{
    '& .MuiOutlinedInput-root':{
        border:'none'
    }
   }}
    InputProps={{
        endAdornment: (
        //   <InputAdornment>
            <IconButton >
              <SearchIcon  />
            </IconButton>
          /* </InputAdornment> */
        )
      }}
  label="Search"
  className="Section2-TextfieldSearch"
/>
      </div>

        </div>
        <div className="Section2-Button">
            <div><Button style={{backgroundColor:"white",width:"150px",borderRadius:"200px",height:'50px'}}>Clear Chat</Button></div>
            <div><Button style={{backgroundColor:"white",width:"120px",borderRadius:"200px",height:'50px',marginLeft:'10px'}}>More</Button></div>

        </div>
        </div>
    </div>
  )
}

export default SecondSection