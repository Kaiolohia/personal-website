import React from "react";
import "./line.css";

export default function Line () {
    const [active, setActive] = React.useState(false)
    React.useEffect(() => {
        setActive(true)
    }, [])

    return (
        <div className="line-box">
            <div className={!active ? "line-left" : "line-left-active"}/>
            <div className={!active ? "line-right" : "line-right-active"}/>
            <div className={!active ? "line-left-color" : "line-left-color-active"}></div>
            <div className={!active ? "line-right-color" : "line-right-color-active"}></div>
        </div>
    )
}