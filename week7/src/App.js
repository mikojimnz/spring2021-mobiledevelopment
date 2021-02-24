import './App.css';
// Import new components
import Laps from './components/Tracker1';
import Pushups from './components/Tracker2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise Tracker</h1>
        <div>
           {/* Render Trackers */}
          <Laps/>
          <Pushups/>
        </div>
      </header>
    </div>
  );
}

export default App;
