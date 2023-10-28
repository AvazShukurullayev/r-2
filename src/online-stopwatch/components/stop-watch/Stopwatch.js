import React from 'react';

class Stopwatch extends React.Component {
    state = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        intervals: [],
        btnDisabled: false,
        tempInterval: ""
    }

    startClicked = () => {
        this.setState({btnDisabled: true})
        let tempInterval = setInterval(() => {
            const {hours, minutes, seconds} = this.state
            if (seconds === 59) {
                if (minutes === 59) this.setState({hours: hours + 1, minutes: 0, seconds: 0})
                else this.setState({minutes: minutes + 1, seconds: 0})
            } else this.setState({seconds: seconds + 1})
        }, 100)
        this.setState({tempInterval})
    }
    stopClicked = () => {
        this.setState({btnDisabled: false})
        clearInterval(this.state.tempInterval)
    }
    intervalClicked = () => {
        const {hours, minutes, seconds, intervals} = this.state
        const intervalsArray = intervals;
        intervalsArray.push(`${hours}:${minutes}:${seconds}`)
        this.setState({intervals: intervalsArray})
    }
    clearClicked = () => {
        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0,
            intervals: []
        })
        this.stopClicked()
    }

    render() {
        const {hours, minutes, seconds, intervals, btnDisabled} = this.state
        return (
            <div className="stopwatch">
                <div className="container">
                    <div className="row">
                        <div className="col-6 mx-auto">
                            <div className="card text-center">
                                <div className="card-header">
                                    <h4>Online Stopwatch</h4>
                                </div>
                                <div className="card-body">
                                    <div>
                                        <p>Hours</p>
                                        <h2>{hours}</h2>
                                    </div>
                                    <div>
                                        <p>Minutes</p>
                                        <h2>{minutes}</h2>
                                    </div>
                                    <div>
                                        <p>Seconds</p>
                                        <h2>{seconds}</h2>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div>
                                        <button className="w-75 my-1 btn btn-success btn-sm"
                                                onClick={this.startClicked} disabled={btnDisabled}>
                                            Start
                                        </button>
                                    </div>
                                    <div>
                                        <button className="w-75 my-1 btn btn-danger btn-sm"
                                                onClick={this.stopClicked}>
                                            Stop
                                        </button>
                                    </div>
                                    <div>
                                        <button className="w-75 my-1 btn btn-warning btn-sm"
                                                onClick={this.intervalClicked} disabled={!btnDisabled}>
                                            Interval
                                        </button>
                                    </div>
                                    <div>
                                        <button className="w-75 my-1 btn btn-secondary btn-sm"
                                                onClick={this.clearClicked}>
                                            Clear
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card text-center my-3">
                                <div className="card-header">
                                    <h5>Intervals</h5>
                                </div>
                                <div className="card-body">
                                    {intervals.length ? intervals.map((interval, index) => <p
                                            className={"fs-0 text-primary m-0 mb-1"}
                                            key={index}>{index + 1}. {interval}</p>) :
                                        <p className={"fs--2 m-0 text-danger"}>Interval storage is empty!</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stopwatch;