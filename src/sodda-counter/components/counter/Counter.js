import React from "react";

class Counter extends React.Component {
    state = {count: 0}

    univFunc = (univValue) => this.setState({count: univValue})

    render() {
        const {count} = this.state
        return (
            <div className="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="text-center">Simple counter</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className={"text-center"}>{count}</h1>
                                </div>
                                <div className="card-footer text-center">
                                    <div className="btn-group">
                                        <button className={"btn btn-sm btn-danger"}
                                                onClick={() => this.univFunc(count - 1)}>
                                            Subtract
                                        </button>
                                        <button className={"btn btn-sm btn-info"}
                                                onClick={() => this.univFunc(0)}>
                                            Reset
                                        </button>
                                        <button className={"btn btn-sm btn-success"}
                                                onClick={() => this.univFunc(count + 1)}>
                                            Addition
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter