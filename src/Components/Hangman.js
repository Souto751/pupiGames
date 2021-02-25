//React
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

//ImageS
import fullLifes from '../gameImg.png';
import fiveLifes from '../gameImg-1.png';
import fourLifes from '../gameImg-2.png';
import threeLifes from '../gameImg-3.png';
import twoLifes from '../gameImg-4.png';
import oneLife from '../gameImg-5.png';
import noLifes from '../gameImg-6.png';
import Home from '../homeIcon.png';
import Fireworks from '../bronze-fireworks.gif';

//Import Component
import Load from './Load';

//JSON
import WordList from './Hangman.json';

//Variables & Functions
const words = WordList;
let playWordCopy = words[Math.floor(Math.random() * words.length)];
let hiddenWordCopy = playWordCopy.split('').map(x => x = '_');
let key = 0;
let lifesCopy = 6;
let disable = true;

function setWord(){
    playWordCopy = words[Math.floor(Math.random() * words.length)];
    hiddenWordCopy = playWordCopy.split('');
    for(let i = 0; i < hiddenWordCopy.length; i++){
        hiddenWordCopy[i] = '_';
    }
    hiddenWordCopy = hiddenWordCopy.filter(x => x === '_');
}

//Component
export default class Hangman extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            wins: 0,
            loses: 0,
            winStreak: 0,
            highWinStreak: 0,
            lifes: lifesCopy,
            gameImages: [noLifes, oneLife, twoLifes, threeLifes, fourLifes, fiveLifes, fullLifes],
            playWord: playWordCopy,
            hiddenWord: hiddenWordCopy
        }
    }

    randomWord(){
        document.getElementsByClassName('fireworks-win')[0].style.display = "none";
        document.getElementsByClassName('fireworks-win')[1].style.display = "none";
        setWord();

        key = 0;
        lifesCopy = 6;

        this.setState({
            lifes: lifesCopy,
            playWord: playWordCopy,
            hiddenWord: hiddenWordCopy
        });

        for(let i = 0; i < document.getElementsByClassName('displayLetter').length; i++){
            document.getElementsByClassName('displayLetter')[i].innerHTML = '_';
        }
        for(let i = 0; i < document.getElementsByClassName('letterBtn').length - 1; i++){
            document.getElementsByClassName('letterBtn')[i].disabled = false;
            document.getElementsByClassName('letterBtn')[i].style.color = '#000';
            document.getElementsByClassName('letterBtn')[i].style.cursor = 'pointer';
            document.getElementsByClassName('letterBtn')[i].style.background = '#fff';
        }

        document.getElementById('next').disabled = true;
        document.getElementById('next').style.color = '#000';
        document.getElementById('next').style.background = '#aaa';
        document.getElementById('next').style.cursor = 'default';
    }

    clickLetter(l){
        if(this.state.playWord.split('').indexOf(l) !== -1){
            document.getElementById(l).disabled = true;
            for(let i = 0; i < this.state.hiddenWord.length; i++){
                if(this.state.playWord[i] === l){
                    hiddenWordCopy[i] = l;
                    this.setState({
                        hiddenWord: hiddenWordCopy
                    });
                    document.getElementById(l).style.color = '#0a0';
                    document.getElementById(l).style.background = '#aaa';
                    
                }
            }

            if(this.state.playWord === this.state.hiddenWord.join('')){
                this.setState({
                    wins: this.state.wins + 1,
                    winStreak: this.state.winStreak + 1
                });

                
                document.getElementsByClassName('fireworks-win')[0].style.display = "flex";
                document.getElementsByClassName('fireworks-win')[1].style.display = "flex";
                
                for(let i = 0; i < document.getElementsByClassName('letterBtn').length - 1; i++){
                    document.getElementsByClassName('letterBtn')[i].disabled = true;
                    document.getElementsByClassName('letterBtn')[i].style.cursor = 'default';
                }

                for(let i = 0; i < document.getElementsByClassName('displayLetter').length; i++){
                    document.getElementsByClassName('displayLetter')[i].style.color = '#0f0';
                }

                disable = false;
                document.getElementById('next').disabled = disable;
                document.getElementById('next').style.color = '#000';
                document.getElementById('next').style.background = '#0f0';
                document.getElementById('next').style.cursor = 'pointer';
            }
    
        }else{
            document.getElementById(l).disabled = true;
            document.getElementById(l).style.background = '#aaa';
            document.getElementById(l).style.color = '#f00';

            if(this.state.lifes > 1){
                lifesCopy--;
                this.setState({
                    lifes: lifesCopy
                });
            }else{
                lifesCopy--;

                for(let i = 0; i < document.getElementsByClassName('letterBtn').length - 1; i++){
                    document.getElementsByClassName('letterBtn')[i].style.cursor = 'default';
                    document.getElementsByClassName('letterBtn')[i].disabled = true;
                }

                for(let i = 0; i < document.getElementsByClassName('displayLetter').length; i++){
                    document.getElementsByClassName('displayLetter')[i].style.color = '#f00';
                }

                disable = false;
                document.getElementById('next').disabled = disable;
                document.getElementById('next').style.color = '#fff';
                document.getElementById('next').style.background = '#f00';
                document.getElementById('next').style.cursor = 'pointer';

                this.setState({
                    hiddenWord: this.state.playWord.split(''),
                    loses: this.state.loses + 1,
                    lifes: lifesCopy,
                    winStreak: 0
                });

                if(this.state.highWinStreak < this.state.winStreak){
                    this.setState({
                        highWinStreak: this.state.winStreak
                    })
                }
            }
        }
        
    }

    render(){
        return (
                <div className="gameDisplay">
                <Load />
                <Helmet>
                    <title>Hangman</title>
                </Helmet>
                <img src={Fireworks} alt="fireworks" className="win-fireworks-left fireworks-win" />
                <img src={Fireworks} alt="fireworks" className="win-fireworks-right fireworks-win" />
                <div className="header">
                    <div><Link to={"/"}><img alt="pupigames" src={Home} className="returnHome" /></Link></div>
                    <div className="counters">
                        <h3 className="count">Wins: <span className="wins">{this.state.wins}</span></h3>
                        <h3 className="count">Loses: <span className="loses">{this.state.loses}</span></h3>
                        <h3 className="count">Win Streak: <span className="streak">{this.state.winStreak}</span></h3>
                        <h3 className="count">Highest Win Streak: <span className="streak-record">{this.state.highWinStreak}</span></h3>
                    </div>
                </div>
                <div className="gameScreen">
                    <div className="gameImageDiv">
                        <img src={this.state.gameImages[this.state.lifes]} className="gmImg" alt="hangman" />
                    </div>
                    <div className="gameDiv">
                        <div className="displayWord">
                        {
                            this.state.hiddenWord.map(letter => {
                                return <span key={key++} className="displayLetter">{letter}</span>
                            })
                        }    
                        </div>
                        <div className="btns">
                        {
                            'abcdefghijklmnopqrstuvwxyz'.split('').map(btnLetter => {
                                return <button key={btnLetter} className="letterBtn" id={btnLetter} onClick={() => this.clickLetter(btnLetter)}>{btnLetter}</button>
                            })
                        }
                        <button className="letterBtn" id='next' onClick={() => this.randomWord()} disabled={disable}>→</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
