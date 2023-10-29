import React from 'react';
import SimpleCounter from "../sodda-counter/SimpleCounter";
import OnlineStopwatch from "../online-stopwatch/OnlineStopwatch";
import Juice from "../juice/Juice";
import LifeCycle from "../life-cycle/LifeCycle";

const App = () => {
    return (
        <div className="app font-monospace">
            <h3 className="text-center text-danger bg-dark mb-5 p-3">Simple counter project | Class Component</h3>
            <SimpleCounter/>
            <h3 className="text-center text-danger bg-dark my-5 p-3">Online stopwatch project | Class Component</h3>
            <OnlineStopwatch/>
            <h3 className="text-center text-danger bg-dark my-5 p-3">Juice project | Class Component</h3>
            <Juice/>
            <h3 className="text-center text-danger bg-dark my-5 p-3">Life cycle methods | Class Component</h3>
            <LifeCycle/>
        </div>
    );
};

export default App;