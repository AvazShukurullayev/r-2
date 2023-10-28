import React from "react"
import {JuiceCards} from "./components";

class Juice extends React.Component {
    state = {}

    render() {
        return (
            <div className="juice">
                <JuiceCards />
            </div>
        )
    }
}

export default Juice