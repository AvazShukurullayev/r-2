import React from "react"
import {Counter} from "./components";

class SimpleCounter extends React.Component {
    render() {
        return (
            <div className="simple__counter">
                <Counter/>
            </div>
        )
    }
}

export default SimpleCounter