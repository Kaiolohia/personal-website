import React from "react";
import Nav from "./Nav"
import Mainanimation from "./Mainanimation";
import NextPage from "./NextPage";
import BackgroundAnimation from "./BackgroundAnimation";
import WaveTransitionUp from "./WaveTransitionUp";

import "./pageone.css"

export default function PageOne ({inc,animationDir, setAnimationDir}) {
    const [wtu, setWtu] = React.useState(false)

    const triggerWaveUpAnimation = () => {
        setWtu(true)
        const delay = setTimeout(() => {
          setAnimationDir("dir-up-wipe")
          inc()
          setWtu(false)
        },1000)
        return () => clearTimeout(delay)
    }

    return (
        <div className="background">
          <div className={animationDir}/>
          <Nav/>
          <Mainanimation/>
          <NextPage twu={triggerWaveUpAnimation}/>
          {wtu && <WaveTransitionUp />}
          <BackgroundAnimation/>
        </div>
      );
}