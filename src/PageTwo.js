import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import PrevPage from "./PrevPage";
import WaveTransitionDown from "./WaveTransitionDown";
import "./pagetwo.css"

export default function PageTwo ({inc, dec, animationDir, setAnimationDir}) {
    const [wtd, setWtd] = React.useState(false)

    const triggerWavDownAnimation = () => {
        setWtd(true)
        const delay = setTimeout(() => {
          setAnimationDir("dir-down-wipe")
          dec()
          setWtd(false)
        },1000)
        return () => clearTimeout(delay)
    }

    return (
        <div className="background">
            <div className={animationDir}/>
            <BackgroundAnimation/>
            <PrevPage twd={triggerWavDownAnimation}/>
            {wtd && <WaveTransitionDown />}
            <div className="container">
                <div className="content-1">
                    Encryption
                  </div>
                <div className="content-2">
                    Turtle
                </div>
                <div className="content-3">
                    KVSafe
                </div>
            </div>
        </div>
    )
}