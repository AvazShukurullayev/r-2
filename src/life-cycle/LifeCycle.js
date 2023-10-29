import React from "react";
import {LifecycleCards} from "./components";

class LifeCycle extends React.Component {
    state = {}

    render() {
        return (
            <div className="life__cycle">
                <LifecycleCards/>
            </div>
        );
    }
}

export default LifeCycle