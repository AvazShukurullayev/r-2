import React from "react"

class LifecycleCard extends React.Component {
    render() {
        const {name, price} = this.props
        return (
            <div className="col-3">
                <ul className="list-group">
                    <li className="list-group-item">
                        <h3>Car name: {name}</h3>
                        <h4>Car price: 💲{price}</h4>
                    </li>
                </ul>
            </div>
        );
    }
}

export default LifecycleCard