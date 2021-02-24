import React, {Component} from 'react';

// Create Laps class
class Laps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  };

  render() {
    return(
      <div>
        {/* Show count */}
        <h2>Laps Taken: {this.state.count}</h2>
        {/* Add 1 to count */}
        <button onClick={() => this.setState({count: this.state.count + 1})}>Add 1</button>
        {/* Reset count */}
        <button onClick={() => this.setState({count: 0})}>Reset</button>
      </div>
    );
  }
}

export default Laps;
