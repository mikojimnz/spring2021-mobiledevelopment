// Import styles
import './App.css';
import './style.css';
// Import new components
import Laps from './components/Tracker1';
import Pushups from './components/Tracker2';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise Tracker</h1>
        <div>
           {/* Render Trackers */}
           <Stopwatch/>
          <Laps/>
          <Pushups/>
        </div>
      </header>
    </div>
  );
}

export default App;
