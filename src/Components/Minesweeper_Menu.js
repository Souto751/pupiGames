//React
import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

//Import Components
import Home from '../homeIcon.png';
import Load from './Load';
import Timer from './MinesweeperComponents/Timer';

//Component
export default function Minesweeper_Menu() {
    return (
        <div>
            <Load />
            <Helmet>
                <title>Minesweeper</title>
            </Helmet>
            <div className="header">
                <div><Link to={"/"}><img alt="pupigames" src={Home} className="returnHome" /></Link></div>
                <div className="counters">
                    <Timer />
                </div>
            </div>
            <div>
                <h2 className="memoryTitle">Minesweeper</h2>
                <div className="memoryChoose"><div>Choose the difficult!</div></div>
                <div className="memoryDifficultDiv">
                    <Link to="/game/minesweeper/easy" className="memoryDif" difficult="Easy">Easy</Link>
                    <Link to="/game/minesweeper/medium" className="memoryDif" difficult="Medium">Medium</Link>
                    <Link to="/game/minesweeper/hard" className="memoryDif" difficult="Hard">Hard</Link>
                </div>
            </div>
        </div>
    )
}
