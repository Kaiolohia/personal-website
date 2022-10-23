import React from "react";
import "./wavetransitiondown.css"
import { ReactComponent as Wave1 } from "./wave1.svg";
import { ReactComponent as Wave2 } from "./wave2.svg";
import { ReactComponent as Wave3 } from "./wave3.svg";


export default function WaveTransitionDown () {
    return (
        <div className="wtd-container">
            <div className="wtd-wave-1-bg">
                <Wave1 className="wtd-wave-1"/>
            </div>
            <div className="wtd-wave-2-bg">
                <Wave2 className="wtd-wave-2"/>
            </div>
            <div className="wtd-wave-3-bg">
                <Wave3 className="wtd-wave-3"/>
            </div>
        </div>
    )
}