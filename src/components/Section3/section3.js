import React from 'react'
import './Section.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InputAdornment from '@mui/material/InputAdornment';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Leftpanel from '../Leftpanel//Leftpanel'
import SearchIcon from "@mui/icons-material/Search";
export default function Section3() {
  return (
    <div className="section3-main">
      <div className="section3-innercontainer">
        <div className="section3-leftpart">
          <Leftpanel></Leftpanel>
        </div>
        <div className="section3-rightpart">
          <div className="section3-inputfield" style={{borderRadius:"400px",border:"0px solid black"}}>
            <TextField
              label="Type Here......"
              style={{ width: "1150px",borderRadius:"400px" ,backgroundColor:"#e8f2fc",border:"0px"}}
              disableUnderline={false}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    {/* <InputLabel>TextField is here</InputLabel> */}
                    <IconButton>
                      <SentimentSatisfiedAltIcon />
                    </IconButton>
                    <IconButton>
                      <AttachFileIcon style={{ paddingLeft: "10px" }} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div className="section3-iconfield"><iconButton varient="primary"><SendRoundedIcon/></iconButton></div>
        </div>
      </div>
    </div>
  )
}
