import React from "react";
import "./mainanimation.css"

import Name from "./Name";
import Subtext from "./Subtext";
import Line from "./Line";

export default function Mainanimation () {
    
    return (
        <div className="splash-box">
            <Name/>
            <Subtext/>
            <Line/>
        </div>
    )
}