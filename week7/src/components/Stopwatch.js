import React, {Component} from 'react';

// Create Laps class
class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hours: 0,
        mins: 0,
        sec: 0,
        mil: 0,
        running: 0
    }
  };


  // Start the stopwatch
  start = () => {
    if (!this.state.running) {
        this.setState({running: 1});
        this.watch = setInterval(() => this.count(), 100);
      }
  }

  // Incremenet values
  count = () => {
    // Add a millisecond
    this.setState({ mil: this.state.mil + 1});

    // Add a second
    if (this.state.mil >= 10) {
        this.setState({sec: this.state.sec + 1});
        this.setState({mil: 0});
    }

    // Add a minute
    if (this.state.sec >= 60) {
        this.setState({min: this.state.min + 1});
        this.setState({sec: 0 });
    }

    // Add a hour
    if (this.state.min >= 60) {
        this.setState({hour: this.state.hour + 1});
        this.setState({min: 0 });
      }
  }

  // Pause stopwatch
  pause = () =>{
    this.setState({running: 0});
    clearInterval(this.watch);
  }

  // Clear stopwatch 
  reset = () => {
      this.setState({
          hours: 0,
          mins: 0,
          sec: 0,
          mil: 0,
          running: 0
        });
  }

  render() {
    return(
      <div>
          <h3>{this.state.hours}:{this.state.mins}:{this.state.sec}.{this.state.mil}</h3>
          <button onClick={this.start}>Start</button>
          <button onClick={this.pause}>Pause</button>
          <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
