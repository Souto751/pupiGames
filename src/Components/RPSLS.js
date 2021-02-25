//React
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

//Images
import Rock from '../rock.png';
import Scissors from '../scissors.png';
import Paper from '../paper.png';
import Lizard from '../lizard.png';
import Spock from '../spock.png';
import NPCRock from '../npc-rock.png';
import NPCScissors from '../npc-scissors.png';
import NPCPaper from '../npc-paper.png';
import NPCLizard from '../npc-lizard.png';
import NPCSpock from '../npc-spock.png';
import Home from '../homeIcon.png';
import Info from '../info.png';

//Component
export default function RPS(){
    let [wins, setWins] = useState(0);
    let [ties, setTies] = useState(0);
    let [loses, setLoses] = useState(0);
    let [winStreak, setWinStreak] = useState(0);
    let [highWinStreak, setHighWinStreak] = useState(0);
    let choices = [Rock, Scissors, Paper, Lizard, Spock];
    let npcChoices = [NPCRock, NPCScissors, NPCPaper, NPCLizard,NPCSpock];
    let [userImg, setUserImg] = useState(choices[0])
    let [npcImg, setNpcImg] = useState(npcChoices[0])
    let npcChoice = 0;
    let userChoice = 0;
    let key = 0;

    const rps = (opt) => {
        npcChoice = Math.floor(Math.random() * Math.floor(5));
        userChoice = opt;
        setUserImg(choices[userChoice]);
        setNpcImg(npcChoices[npcChoice]);

        if((userChoice === 0 && npcChoice === 1) || (userChoice === 0 && npcChoice === 3) || (userChoice === 1 && npcChoice === 2) || (userChoice === 1 && npcChoice === 3) || 
        (userChoice === 2 && npcChoice === 0) || (userChoice === 2 && npcChoice === 4) || (userChoice === 3 && npcChoice === 4) || (userChoice === 3 && npcChoice === 2) || 
        (userChoice === 4 && npcChoice === 1) || (userChoice === 4 && npcChoice === 0)){
            setWins(wins+1);
            setWinStreak(winStreak+1);
            document.getElementById('rpsYouP').style.color = '#0f0';
            document.getElementById('rpsNpcP').style.color = '#fff';
        }else if((npcChoice === 0 && userChoice === 1) || (npcChoice === 0 && userChoice === 3) || (npcChoice === 1 && userChoice === 2) || (npcChoice === 1 && userChoice === 3) || 
        (npcChoice === 2 && userChoice === 0) || (npcChoice === 2 && userChoice === 4) || (npcChoice === 3 && userChoice === 4) || (npcChoice === 3 && userChoice === 2) || 
        (npcChoice === 4 && userChoice === 1) || (npcChoice === 4 && userChoice === 0)){
            setLoses(loses+1);
            setWinStreak(0);
            document.getElementById('rpsYouP').style.color = '#fff';
            document.getElementById('rpsNpcP').style.color = '#f00';
        }else{
            setTies(ties+1);
            setWinStreak(0);
            document.getElementById('rpsYouP').style.color = '#aaa';
            document.getElementById('rpsNpcP').style.color = '#aaa';
        }
        if(winStreak >= highWinStreak){
            setHighWinStreak(winStreak);
        }
    }

    const showInfo = (state) => {
        if(state === "show"){
            document.getElementsByClassName("infoRpslsDiv")[0].style.display = "block";
        }else if(state === "hide"){
            document.getElementsByClassName("infoRpslsDiv")[0].style.display = "none";
        }
    }

        return (
            <div className="gameDisplay" id="rpsDisplay">
                <Helmet>
                    <title>Rock Paper Scissors Lizard Spock</title>
                </Helmet>
                <div className="header">
                    <div className="titleDiv">
                        <div><Link to={"/"}><img alt="pupigames" src={Home} className="returnHome" /></Link></div>
                    </div>
                    <div className="counters">
                        <h3 className="count">Wins: <span className="wins">{wins}</span></h3>
                        <h3 className="count">Ties: <span className="ties">{ties}</span></h3>
                        <h3 className="count">Loses: <span className="loses">{loses}</span></h3>
                        <h3 className="count">Win Streak: <span className="streak">{winStreak}</span></h3>
                        <h3 className="count">Highest Win Streak: <span className="streak-record">{highWinStreak}</span></h3>
                    </div>
                </div>
                <div className="gameScreen">
                    <div>
                        <div className="playerNames">
                            <p id="rpsYouP">You</p>
                            <p id="rpsNpcP">NPC</p>
                        </div>
                        <div className="choices">
                            <img alt="" src={userImg} className="gameImg" />
                            <img alt="" src={npcImg} className="gameImg" />
                        </div>
                    </div>
                    <div className="rpslsBtnsDiv">
                    {
                        choices.map((option, ch = 0) => {
                            return <button key={key++} className="rpslsOptionBtn" onClick={() => rps(ch)}><img alt="choice" src={option} className="rpslsOptionBtnImg" /></button>
                        })
                    }
                    </div>
                </div>
                <img className="infoRpsBtn" src={Info} alt="info" onClick={() => showInfo("show")} />
                <div className="infoRpslsDiv"><p className="closeRpsInfo" onClick={() => showInfo("hide")}>x</p></div>
            </div>
        )
}