//React
import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

//Import Components
import Home from '../homeIcon.png';
import Load from './Load';

//Component
export default function Memory_Menu() {

    return (
        <div>
            <Load />
            <Helmet>
                <title>Memotest</title>
            </Helmet>
            <div className="header">
                <div><Link to={"/"}><img alt="pupigames" src={Home} className="returnHome" /></Link></div>
                <div className="counters">
                </div>
            </div>
            <div>
                <h2 className="memoryTitle">Memotest</h2>
                <div className="memoryChoose"><div>Choose the difficult!</div></div>
                <div className="memoryDifficultDiv">
                    <Link to="/game/memotest/very_easy" className="memoryDif" difficult="Very Easy">Very Easy</Link>
                    <Link to="/game/memotest/easy" className="memoryDif" difficult="Easy">Easy</Link>
                    <Link to="/game/memotest/medium" className="memoryDif" difficult="Medium">Medium</Link>
                    <Link to="/game/memotest/hard" className="memoryDif" difficult="Hard">Hard</Link>
                    <Link to="/game/memotest/very_hard" className="memoryDif" difficult="Very Hard">Very Hard</Link>
                </div>
            </div>
        </div>
    )
}
