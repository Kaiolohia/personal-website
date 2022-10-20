import React from "react";
import "./nextpage.css";

export default function NextPage ({twu}) {
    return (
        <div className="next-container" onClick={twu}>
            <div className="next-line-1"/>
            <div className="next-line-2"/>
            <p className="next-text">
                NEXT PAGE
            </p>
        </div>
    )
}