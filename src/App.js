//React
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Images
import Logo from './logo.png';

//Components
import Main from './Components/Main';
import RPS_Menu from './Components/RPS_Menu';
import RPS from './Components/RPS';
import RPSLS from './Components/RPSLS';
import Hangman from './Components/Hangman';
import Memory_Menu from './Components/Memory_Menu';
import Memory from './Components/Memory';
import Load from './Components/Load';
import Minesweeper from './Components/Minesweeper';
import Minesweeper_Menu from './Components/Minesweeper_Menu';

//Styles
import './App.css';

function App() {

  return (
    <Router>
      <Load />
        <div className="App">
        <img src={Logo} alt="PupiGames" className="background-logo" />
          <header className="App-header">
            <Route exact path="/" component={Main} />
            <Route exact path="/game/memotest/difficult" component={Memory_Menu} />
            <Route exact path="/game/minesweeper/difficult" component={Minesweeper_Menu} />
            <Route exact path="/game/rockScissorPaper/mode" component={RPS_Menu} />
            <Route exact path="/game/minesweeper/easy"><Minesweeper dif={"easy"} /></Route>
            <Route exact path="/game/minesweeper/medium"><Minesweeper dif={"medium"} /></Route>
            <Route exact path="/game/minesweeper/hard"><Minesweeper dif={"hard"} /></Route>
            <Route exact path="/game/memotest/very_easy"><Memory dif={"very_easy"} /></Route>
            <Route exact path="/game/memotest/easy"><Memory dif={"easy"} /></Route>
            <Route exact path="/game/memotest/medium"><Memory dif={"medium"} /></Route>
            <Route exact path="/game/memotest/hard"><Memory dif={"hard"} /></Route>
            <Route exact path="/game/memotest/very_hard"><Memory dif={"very_hard"} /></Route>
            <Route exact path="/game/rockScissorPaper" component={RPS} />
            <Route exact path="/game/rockScissorPaperLizardSpock" component={RPSLS} />
            <Route exact path="/game/hangman" component={Hangman} />
          </header>
        </div>
    </Router>
  );
}

export default App;
