import React from 'react';

function Laps (props) {

    return (
        <div>
            <h2>Laps: {props.state.laps}</h2>
            <button onClick={() => props.dispatch({"type": "increment1"})}>Add 1</button>
            <button onClick={() => props.dispatch({"type": "decrement1"})}>Subtract 1</button>
        </div>
    )
}

 export default Laps;