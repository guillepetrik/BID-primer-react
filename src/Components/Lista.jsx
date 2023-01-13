import React, { Component } from "react"
import Lcuatro from "./Lcuatro"
import Ldos from "./Ldos"
import Ltres from "./Ltres"
import Luno from "./Luno"

class Lista extends Component {
    render(){
        return (
            <>
            <ul>
                <Luno/>
                <Ldos/>
                <Ltres/>
                <Lcuatro/>
            </ul>
            </>
        )
    }
}
export default Lista