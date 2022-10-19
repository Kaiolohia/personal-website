import React from "react";
import "./subtext.css";

export default function Subtext () {
                                                    //S O F T W A R E _ E N G I N E E R
    const [delayList, setDelayList] = React.useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    React.useEffect (() => {
        let i = 17
        let tempList = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        const increment = () => {
            if (i < 0) {
                clearInterval(delayInterval)
            } else {
                tempList[i] = 1
            }
            setDelayList([...tempList])
            i--
        }
        const delayInterval = setInterval(increment, 20)
    }, [])

    return (
        <div className="sub-text-box">
            <div className="col-sb">
                <p className={!delayList[0] ? "text-start" : "text-finish"}>
                    S
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[1] ? "text-start" : "text-finish"}>
                    O
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[2] ? "text-start" : "text-finish"}>
                    F
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[3] ? "text-start" : "text-finish"}>
                    T
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[4] ? "text-start" : "text-finish"}>
                    W
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[5] ? "text-start" : "text-finish"}>
                    A
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[6] ? "text-start" : "text-finish"}>
                    R
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[7] ? "text-start" : "text-finish"}>
                    E
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[8] ? "text-start" : "text-finish"}>
                    
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[9] ? "text-start" : "text-finish"}>
                    E
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[10] ? "text-start" : "text-finish"}>
                    N
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[12] ? "text-start" : "text-finish"}>
                    G
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[13] ? "text-start" : "text-finish"}>
                    I
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[14] ? "text-start" : "text-finish"}>
                    N
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[15] ? "text-start" : "text-finish"}>
                    E
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[16] ? "text-start" : "text-finish"}>
                    E
                </p>
            </div>
            <div className="col-sb">
                <p className={!delayList[17] ? "text-start" : "text-finish"}>
                    R
                </p>
            </div>
        </div>
    )
}