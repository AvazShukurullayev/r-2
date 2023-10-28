import React from 'react';
import SimpleCounter from "../sodda-counter/SimpleCounter";
import OnlineStopwatch from "../online-stopwatch/OnlineStopwatch";

const App = () => {
    return (
        <div className="app">
            <h1 className="text-center text-danger bg-dark mb-5 p-3">Simple counter project | Class Component</h1>
            <SimpleCounter />
            <h1 className="text-center text-danger bg-dark my-5 p-3">Online stopwatch project | Class Component</h1>
            <OnlineStopwatch/>
        </div>
    );
};

export default App;