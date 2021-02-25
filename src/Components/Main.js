//React
import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

//Images
import HangmanImg from '../hangman.jpg';
import MemoryImg from '../memoryGame.jpg';
import RPSImg from '../rsp.jpg';
import Mine from '../minesweeper.jpg';
import Snake from '../snake.jpg';
import Chess from '../chess.jpg';

//Import Component
import Load from './Load';

//Component
export default function Main() {
    const games = [
        {
            id: "memotest",
            img: MemoryImg,
            extra: "difficult"
        },
        {
            id: "hangman",
            img: HangmanImg
        }, 
        {
            id: "rockScissorPaper",
            img: RPSImg,
            extra: "mode"
        },
        {
            id: "minesweeper",
            img: Mine,
            extra: "difficult"
        },
        {
            id: "snake",
            img: Snake,
            extra: "mode"
        },
        {
            id: "chess",
            img: Chess,
            extra: "difficult"
        }
    ];

    const hideGames = () => {
        document.getElementsByClassName("GameLinkDiv")[0].style.display = "none";
    }
    
    return (
        <div>
            <Load />
            <Helmet>
                <title>PupiGames</title>
            </Helmet>
            <div className="GameLinkDiv">
                {
                    games.map(game => {
                        if(game.extra){
                            return <Link to={"/game/"+game.id+"/"+game.extra} key={game.id}><img alt="game" src={game.img} className="GameLinkImg" onClick={() => hideGames()} /></Link>
                        }else{
                            return <Link to={"/game/"+game.id} key={game.id}><img alt="game" src={game.img} className="GameLinkImg" onClick={() => hideGames()} /></Link>
                        }                        
                    })
                }
            </div>
        </div>
    )
}
