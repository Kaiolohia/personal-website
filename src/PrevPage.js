import React from "react";
import "./prevpage.css";

export default function PrevPage ({twd}) {
    return (
        <div className="prev-container" onClick={twd}>
            <div className="rotate">
                <div className="prev-line-1"/>
                <div className="prev-line-2"/>
            </div>
            <p className="prev-text">
                PREV PAGE
            </p>
        </div>
    )
}