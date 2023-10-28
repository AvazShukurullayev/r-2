import React from "react"
import {JuiceCard, juiceData} from "../index";

class JuiceCards extends React.Component {
    state = {}

    render() {
        return (
            <div className={"juice__cards"}>
                <div className="container">
                    <div className="row">
                        {juiceData.length ? juiceData.map(item => (
                            <JuiceCard key={item.id} name={item.name} discount={item.discount} desc={item.desc}
                                       img={item.img} price={item.price}/>)) : ""}
                    </div>
                </div>
            </div>
        )
    }
}

export default JuiceCards