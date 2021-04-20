import React, { useReducer } from 'react';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import Laps from './components/Laps';
import Pushups from './components/Pushups';

function App() {

  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise Trackers</h1>
        <Laps state={currentState} dispatch={dispatch}/>
        <Pushups state={currentState} dispatch={dispatch}/>
      </header>
    </div>
  );
}

export default App;
