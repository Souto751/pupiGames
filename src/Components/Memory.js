//React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

//Images
import Espeon from '../espeon.png';
import Flareon from '../flareon.png';
import Eevee from '../eevee.png';
import Jolteon from '../jolteon.png';
import Umbreon from '../umbreon.png';
import Vaporeon from '../vaporeon.png';
import Leafeon from '../leafeon.png';
import Glaceon from '../glaceon.png';
import Sylveon from '../sylveon.png';
import Growlithe from '../growlithe.png';
import Zorua from '../zorua.png';
import Dragonite from '../dragonite.png';
import Axew from '../axew.png';
import Oshawott from '../oshawott.png';
import Rattata from '../rattata.png';
import Card from '../card.png';
import Home from '../homeIcon.png';
import Fireworks from '../bronze-fireworks.gif';

//Component
export default function Memory(props){
    let choices;
    let maxMoves;
    switch(props.dif){
        case 'very_easy':
            choices = [
                {img: Eevee, id: 'eevee', paired: false}, 
                {img: Espeon, id:'espeon', paired: false}, 
                {img: Flareon, id:'flareon', paired: false}, 
                {img: Jolteon, id:'jolteon', paired: false}, 
                {img: Umbreon, id:'umbreon', paired: false}, 
                {img: Vaporeon, id:'vaporeon', paired: false},
                {img: Growlithe, id:'growlithe', paired: false}, 
                {img: Zorua, id:'zorua', paired: false}, 
                {img: Axew, id:'axew', paired: false}, 
                {img: Rattata, id:'rattata', paired: false}
            ];
            maxMoves = 27;
            break;
        case 'easy':
            choices = [
                {img: Eevee, id: 'eevee', paired: false}, 
                {img: Espeon, id:'espeon', paired: false}, 
                {img: Flareon, id:'flareon', paired: false}, 
                {img: Jolteon, id:'jolteon', paired: false}, 
                {img: Umbreon, id:'umbreon', paired: false}, 
                {img: Vaporeon, id:'vaporeon', paired: false}, 
                {img: Growlithe, id:'growlithe', paired: false}, 
                {img: Zorua, id:'zorua', paired: false}, 
                {img: Axew, id:'axew', paired: false}, 
                {img: Rattata, id:'rattata', paired: false}
            ];
            maxMoves = 23;
            break;
        case 'medium':
            choices = [
                {img: Eevee, id: 'eevee', paired: false}, 
                {img: Espeon, id:'espeon', paired: false}, 
                {img: Flareon, id:'flareon', paired: false}, 
                {img: Jolteon, id:'jolteon', paired: false}, 
                {img: Umbreon, id:'umbreon', paired: false}, 
                {img: Vaporeon, id:'vaporeon', paired: false}, 
                {img: Leafeon, id:'leafeon', paired: false}, 
                {img: Glaceon, id:'glaceon', paired: false}, 
                {img: Sylveon, id:'sylveon', paired: false}, 
                {img: Growlithe, id:'growlithe', paired: false}, 
                {img: Zorua, id:'zorua', paired: false}, 
                {img: Axew, id:'axew', paired: false}, 
                {img: Rattata, id:'rattata', paired: false}
            ];
            maxMoves = 30;
            break;
        case 'hard':
            choices = [
                {img: Eevee, id: 'eevee', paired: false}, 
                {img: Espeon, id:'espeon', paired: false}, 
                {img: Flareon, id:'flareon', paired: false}, 
                {img: Jolteon, id:'jolteon', paired: false}, 
                {img: Umbreon, id:'umbreon', paired: false}, 
                {img: Vaporeon, id:'vaporeon', paired: false}, 
                {img: Leafeon, id:'leafeon', paired: false}, 
                {img: Glaceon, id:'glaceon', paired: false}, 
                {img: Sylveon, id:'sylveon', paired: false}, 
                {img: Growlithe, id:'growlithe', paired: false}, 
                {img: Zorua, id:'zorua', paired: false}, 
                {img: Dragonite, id:'dragonite', paired: false}, 
                {img: Axew, id:'axew', paired: false}, 
                {img: Oshawott, id:'oshawott', paired: false}, 
                {img: Rattata, id:'rattata', paired: false}
            ];
            maxMoves = 35;
            break;
        case 'very_hard':
            choices = [
                {img: Eevee, id: 'eevee', paired: false}, 
                {img: Espeon, id:'espeon', paired: false}, 
                {img: Flareon, id:'flareon', paired: false}, 
                {img: Jolteon, id:'jolteon', paired: false}, 
                {img: Umbreon, id:'umbreon', paired: false}, 
                {img: Vaporeon, id:'vaporeon', paired: false}, 
                {img: Leafeon, id:'leafeon', paired: false}, 
                {img: Glaceon, id:'glaceon', paired: false}, 
                {img: Sylveon, id:'sylveon', paired: false}, 
                {img: Growlithe, id:'growlithe', paired: false}, 
                {img: Zorua, id:'zorua', paired: false}, 
                {img: Dragonite, id:'dragonite', paired: false}, 
                {img: Axew, id:'axew', paired: false}, 
                {img: Oshawott, id:'oshawott', paired: false}, 
                {img: Rattata, id:'rattata', paired: false}
            ];
            maxMoves = 30;
            break;
        default:
            break;
    }

    const [wins, setWins] = useState(0);
    const [loses, setLoses] = useState(0);
    const [moves, setMoves] = useState(0);
    let [cards] = useState([...choices, ...choices]);
    let firstCard = cards[0];
    let secondCard = cards[0];
    let selected = false;
    let finished = true;
    let firstChoice;
    const [pairs, setPairs] = useState(15);
    let userChoice = 0;
    let key = 0;


    const loseGame = () => {
        setLoses(loses + 1);
        document.getElementsByClassName('memoLose')[0].style.display = "block";
        document.getElementsByClassName('newGameScreen')[0].style.display = "flex";
    }

    const restartGame = () => {
        shuffle(cards);
        setPairs(0);
        setMoves(0);
        for(let i = 0; i < cards.length; i++){
            document.getElementsByClassName('flippedImg')[i].style.display = "none";
            document.getElementsByClassName('memoOptionBtn')[i].style.animation = "none";
            document.getElementsByClassName('memoOptionBtn')[i].style.display = "block";
        }
        document.getElementsByClassName('memoWin')[0].style.display = "none";
        document.getElementsByClassName('memoLose')[0].style.display = "none";
        document.getElementsByClassName('newGameScreen')[0].style.display = "none";
        document.getElementsByClassName('fireworks-win')[0].style.display = "none";
        document.getElementsByClassName('fireworks-win')[1].style.display = "none";
    }

    const memo = (opt) => {

        if(pairs !== choices.length){
            finished = false;
        }
        
        if(finished === true){
            setWins(wins + 1);
            document.getElementsByClassName('newGameScreen')[0].style.display = "flex";
        }else{
            document.getElementById(cards[opt].id).addEventListener("click", function(event){
                event.preventDefault()
            });
    
            userChoice = opt;
            finished = true;
    
            if(selected === false){
                firstChoice = userChoice;
                firstCard = cards[userChoice];
                selected = true;
                document.getElementsByClassName('memoOptionBtn')[firstChoice].style.animation = "1s hideCard forwards";
                document.getElementsByClassName('memoOptionBtn')[firstChoice].style.display = "none";
                document.getElementsByClassName('flippedImg')[firstChoice].style.display = "block";
                document.getElementsByClassName('flippedImg')[firstChoice].style.animation = "1s showImg forwards";
            }else{
                if(opt !== firstChoice){
                    secondCard = cards[userChoice];
                    selected = false;
                    setMoves(moves + 1);
    
                    document.getElementsByClassName('memoOptionBtn')[opt].style.animation = "1s hideCard forwards";
                    document.getElementsByClassName('memoOptionBtn')[opt].style.display = "none";
                    document.getElementsByClassName('flippedImg')[opt].style.display = "block";
                    document.getElementsByClassName('flippedImg')[opt].style.animation = "1s showImg forwards";
                    
                    if(firstCard.id === secondCard.id){
                        setPairs(pairs + 1);
                    }else{
                        setTimeout(function(){
                            document.getElementsByClassName('flippedImg')[firstChoice].style.animation = "1s hideCard forwards";
                            document.getElementsByClassName('flippedImg')[firstChoice].style.display = "none";
                            document.getElementsByClassName('memoOptionBtn')[firstChoice].style.display = "block";
                            document.getElementsByClassName('memoOptionBtn')[firstChoice].style.animation = "1s showImg forwards";
    
                            document.getElementsByClassName('flippedImg')[opt].style.animation = "1s hideCard forwards";
                            document.getElementsByClassName('flippedImg')[opt].style.display = "none";
                            document.getElementsByClassName('memoOptionBtn')[opt].style.display = "block";
                            document.getElementsByClassName('memoOptionBtn')[opt].style.animation = "1s showImg forwards";
                        }, 1000);

                        
                        
                    }
    
                    if(pairs !== choices.length-1 && selected === false){
                        finished = false;
                    }
                    
                    if(finished === true){
                        setWins(wins + 1);
                        document.getElementsByClassName('memoWin')[0].style.display = "block";
                        document.getElementsByClassName('newGameScreen')[0].style.display = "flex";
                        document.getElementsByClassName('fireworks-win')[0].style.display = "flex";
                        document.getElementsByClassName('fireworks-win')[1].style.display = "flex";
                    }
                }
            }
            if(moves === maxMoves){
                loseGame();
            }
        }

        
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }
    

        return (
            <div className="gameDisplay">
                <Helmet>
                    <title>Memotest</title>
                </Helmet>
                <img src={Fireworks} alt="fireworks" className="win-fireworks-left fireworks-win" />
                <img src={Fireworks} alt="fireworks" className="win-fireworks-right fireworks-win" />
                <div className="header">
                    <div className="titleDiv">
                        <Link to="/"><img src={Home} className="returnHome" alt="hangman" /></Link>
                    </div>
                    <div className="counters">
                        <h3 className="count">Wins: <span className="wins">{wins}</span></h3>
                        <h3 className="count">Loses: <span className="loses">{loses}</span></h3>
                        <h3 className="count">Moves: <span className="moves">{moves} / {maxMoves}</span></h3>
                    </div>
                </div>
                <div className="gameScreen">
                    <div className="memoBtnsDiv">
                        <div className="newGameScreen">
                            <div className="memoWin">You Win!</div>
                            <div className="memoLose">You Lose!</div>
                            <button onClick={() => restartGame()}>New Game</button>
                        </div>
                    {
                        cards.map((option, ch = 0) => {
                            return <div key={key++} className="memoBtnContainer">
                                <div id={option.id} className="memoOptionBtn" onClick={() => memo(ch)} disabled={option.selected}><img alt="choice" src={Card} className="pokeballCard" /></div>
                                <img alt="choice" src={option.img} className="flippedImg" />
                            </div>
                        })
                    }
                    </div>
                </div>
            </div>
        )
}
