import React from "react";
import {carsData, LifecycleCard} from "../index";

class LifecycleCards extends React.Component {
    state = {
        cars: []
    }

    componentDidMount() {
        this.setState({cars: carsData})
    }

    render() {
        const {cars} = this.state
        return (
            <div className="lifecycle__cards">
                <div className="container">
                    <div className="row">
                        {cars.length ? cars.map((car) => (
                            <LifecycleCard key={car.id} name={car.name} price={car.price}/>)) : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default LifecycleCards