//React
import React from 'react';

//Images
import Logo from '../logo.png';

//Component
export default function Load() {
    return (
        <div className="loadScreen">
            <div className="loadDiv">
                <img src={Logo} alt="loadgames" className="loadLogo" />
                <div class="loadWheel"></div>
            </div>
        </div>
    )
}
