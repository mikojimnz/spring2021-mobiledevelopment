import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';

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
      <View style={{border: "1px solid black", padding: "25px", width: "50%"}}>
          <Text h3 style={{textAlign: "center"}}>{this.state.hours}:{this.state.mins}:{this.state.sec}.{this.state.mil}</Text>
          <Button title="Start" onPress={this.start} style={{ padding: "10px" }}/>
          <Button title="Stop" onPress={this.pause} style={{ padding: "10px" }}/>
          <Button title="Reset" onPress={this.reset} style={{ padding: "10px" }}/>
      </View>
    );
  }
}

export default Stopwatch;
