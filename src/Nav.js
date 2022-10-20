import React from "react";
import "./nav.css"

export default function Nav () {
    const [active, setActive] = React.useState(false)
    const [content, setContent] = React.useState(["", "", "", ""])

    const triggerAnimation = () => {
        setActive(!active)
    }

    //delay content of A tags to avoid scroll bars showing

    React.useEffect(() => {
        if (active) {
            const delay = setTimeout(() => {
                setContent(["GITHUB", "LINKEDIN", "RESUME", "close"])
            }, 2000)
            return () => clearTimeout(delay)
        } else {
            setContent(["", "", "", ""])
        }
    }, [active])
    return (
        <div className={!active ? "main" : "main-open"} >
            {!active ?  (
                <div className="trigger" onClick={triggerAnimation}>
                    <div className="line-1">
                    </div>
                    <div className="line-2">
                    </div>
                    <div className="line-3">
                    </div>
                </div> ) : (<>
                    <div className="trigger-open" onClick={triggerAnimation}>
                        <span className="material-symbols-outlined close">{content[3]}</span>
                    </div>
                    <div className="line-1 open">
                        <a href={"https://github.com/Kaiolohia"} target="_blank" rel="noreferrer">{content[0]}</a>
                    </div>
                    <div className="line-2 open">
                        <a href={"https://www.linkedin.com/in/kai-dean-73846a217/"} target="_blank" rel="noreferrer">{content[1]}</a>
                    </div>
                    <div className="line-3 open">
                        <a href={"https://docs.google.com/document/d/1nV9rhDmva1inTiLgyTucKDliTbD8MllHlasoNmvNpDk/edit?usp=sharing"} target="_blank" rel="noreferrer">{content[2]}</a>
                    </div>
                    
                </>)
            }
           

        </div>
    )
}