//React
import React from 'react';
import {Link} from 'react-router-dom';

//Import Components
import Home from '../homeIcon.png';

//Component
export default function Minesweeper() {

    const isMine = (value) => {
        if(value === "mine"){
            alert("You Lose!");
        }
    }

    return (
        <div>
            <div className="header">
                <div><Link to={"/"}><img alt="pupigames" src={Home} className="returnHome" /></Link></div>
                <div className="counters">
                </div>
            </div>
        </div>
    )
}
