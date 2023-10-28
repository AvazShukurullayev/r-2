import React from 'react';
import {Stopwatch} from "./components";

class OnlineStopwatch extends React.Component {
    render() {
        return (
            <div className="online__stopwatch">
                <Stopwatch/>
            </div>
        );
    }
}

export default OnlineStopwatch;