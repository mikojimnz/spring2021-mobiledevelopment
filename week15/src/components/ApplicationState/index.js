let state = {
    laps: 0,
    pushups: 0
};

function reducer(state, action) {
    switch(action.type) {
        case `increment1`:
            return {laps: state.laps + 1, pushups: state.pushups};
        case `increment2`:
            return {laps: state.laps, pushups: state.pushups + 10};
        case `decrement1`:
            return {laps: state.laps - 1, pushups: state.pushups};
        case `decrement2`:
            return {laps: state.laps, pushups: state.pushups - 10};
        default:
            throw new Error();
    }
}

export {state, reducer};