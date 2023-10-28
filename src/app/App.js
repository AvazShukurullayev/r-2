import React from 'react';
import SimpleCounter from "../sodda-counter/SimpleCounter";
import OnlineStopwatch from "../online-stopwatch/OnlineStopwatch";
import Juice from "../juice/Juice";

const App = () => {
    return (
        <div className="app font-monospace">
            <h2 className="text-center text-danger bg-dark mb-5 p-3">Simple counter project | Class Component</h2>
            <SimpleCounter />
            <h2 className="text-center text-danger bg-dark my-5 p-3">Online stopwatch project | Class Component</h2>
            <OnlineStopwatch/>
            <h2 className="text-center text-danger bg-dark my-5 p-3">Juice project | Class Component</h2>
            <Juice />
        </div>
    );
};

export default App;