//React
import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

//Import Components
import Home from '../homeIcon.png';
import Load from './Load';

//Images
import RPSLS from '../rpsls.png';
import RPS from '../rps.png';

//Component
export default function RPS_Menu() {
    return (
        <div>
            <Load />
            <Helmet>
                <title>Choose the Mod</title>
            </Helmet>
            <div className="header">
                <div><Link to={"/"}><img alt="pupigames" src={Home} className="returnHome" /></Link></div>
            </div>
            <h2 className="rpsModeh2">Select Mode</h2>
            <div className="rpsMode">
                <Link className="rpsModeLink" to="/game/rockScissorPaper"><img className="rpsModeImg" src={RPS} alt="rock scissors paper" /></Link>
                <Link className="rpsModeLink" to="/game/rockScissorPaperLizardSpock"><img className="rpsModeImg" src={RPSLS} alt="rock scissors paper lizard spock" /></Link>
            </div>
        </div>
    )
}
