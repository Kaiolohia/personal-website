import React from "react";
import "./wavetransitionup.css"
import { ReactComponent as Wave1 } from "./wave1.svg";
import { ReactComponent as Wave2 } from "./wave2.svg";
import { ReactComponent as Wave3 } from "./wave3.svg";


export default function WaveTransitionUp () {
    return (
        <div className="wtu-container">
            <div className="wtu-wave-1-bg">
                <Wave1 className="wtu-wave-1"/>
            </div>
            <div className="wtu-wave-2-bg">
                <Wave2 className="wtu-wave-2"/>
            </div>
            <div className="wtu-wave-3-bg">
                <Wave3 className="wtu-wave-3"/>
            </div>
        </div>
    )
}