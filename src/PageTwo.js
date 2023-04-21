import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import PrevPage from "./PrevPage";
import WaveTransitionDown from "./WaveTransitionDown";
import "./pagetwo.css"
import { ReactComponent as Lock } from "./lock-solid.svg";
import { ReactComponent as Wifi } from "./wifi-solid.svg";
import { ReactComponent as Key } from "./key-solid.svg";

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
                    <div className="box-1">
                        <h1 className="title">ENCRYPTION <Lock className="lock"/></h1>
                    </div>
                </div>
                <div className="content-2">
                    <div className="box-2">
                        <h1 className="title">TURTLE <Wifi className="wifi"/></h1>
                    </div>
                </div>
                <div className="content-3">
                    <div className="box-3">
                        <h1 className="title">KVSAFE <Key className="key"/></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}