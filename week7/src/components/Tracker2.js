import React, {Component} from 'react';

// Create Puships class
class Pushups extends Component {
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
        <h2>Pushups Made: {this.state.count}</h2>
        {/* Add 10 to count */}
        <button onClick={() => this.setState({count: this.state.count + 10})}>Add 10</button>
        {/* Reset count */}
        <button onClick={() => this.setState({count: 0})}>Reset</button>
      </div>
    );
  }
}

export default Pushups;
