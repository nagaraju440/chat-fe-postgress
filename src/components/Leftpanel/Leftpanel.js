import React from 'react'
import './Leftpanel.css';
import Avatar from '@mui/material/Avatar';

function Leftpanel() {
    const array = [
        {
            id: 1,
            img: "HP",
            name: "VARSHA",
            discription: "student",
            activetime: "9:00"
        },
        {
            id: 2,
            img: "HP",
            name: "VARSHA",
            discription: "student",
            activetime: "9:00"
        },
        {
            id: 3,
            img: "HP",
            name: "VARSHA",
            discription: "student",
            activetime: "9:00"
        },
        {
            id: 4,
            img: "V",
            name: "VARSHA",
            discription: "student",
            activetime: "9:00"
        },
        {
            id: 5,
            img: "HP",
            name: "VARSHA",
            discription: "student",
            activetime: "9:00"
        },
        {
            id: 6,
            img: "HP",
            name: "VARSHA",
            discription: "student",
            activetime: "9:00"
        },
        {
            id: 6,
            img: "HP",
            name: "VARSHA",
            discription: "student",
            activetime: "9:00"
        },
        {
            id: 6,
            img: "HP",
            name: "VARSHA",
            discription: "student",
            activetime: "9:00"
        },
        {
            id: 6,
            img: "HP",
            name: "VARSHA",
            discription: "student",
            activetime: "9:00"
        },
        {
            id: 6,
            img: "HP",
            name: "VARSHA",
            discription: "student",
            activetime: "9:00"
        },
        
    ]
    
    return (
        <div>
            {
                array.map((arr,id) => (
                    <div className="left-panel" key={id}>
                        <div className="left-panel-avatar"><Avatar>{arr.img}</Avatar></div>
                        <div className="left-panel-discription">
                            <div>{arr.name}</div>
                            <div>{arr.discription}</div>
                        </div>
                        <div className="left-panel-activetime">{arr.activetime}</div>
                    </div>
                ))
            }
        </div>

        // <div className="left-panel">
        //  <div className="left-panel-avatar"><Avatar>HP</Avatar></div>
        //  <div className="left-panel-discription">
        //     <div>VARSHA</div>
        //     <div>student</div>
        //  </div>
        //  <div className="left-panel-activetime">9:00</div>
        // </div>
    )
}

export default Leftpanel