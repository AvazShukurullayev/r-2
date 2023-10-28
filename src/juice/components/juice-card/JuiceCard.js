import React from "react"

class JuiceCard extends React.Component {
    render() {
        const {name, discount, img, price, desc} = this.props
        return (
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 my-2 mx-auto">
                <div className="card text-center">
                    <div className="card-header">
                        <div className={"d-flex justify-content-end mb-1"}>
                            <span className={"badge bg-danger"}>-{discount}%</span>
                        </div>
                        <h5>{name}</h5>
                    </div>
                    <div className="card-body">
                        <img src={img} className={"img-fluid w-100"} alt={name}/>
                    </div>
                    <div className="card-footer">
                        <h4>💲{price}</h4>
                        <p>{desc}</p>
                        <button className={"btn btn-sm btn-warning w-75"}>View</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default JuiceCard