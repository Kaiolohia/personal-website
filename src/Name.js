import React from "react";
import "./name.css"

export default function Name () {
    const [delayList, setDelayList] = React.useState([0,0,0,0,0,0,0,0])
    React.useEffect(() => {
        let i = 0
        let tempList = [0,0,0,0,0,0,0,0]
        const increment = () => {
            console.log("running")
            console.log(i)
            console.log(tempList)

            if (i > 7) {
                clearInterval(delayInterval)
            } else {
                tempList[i] = 1
            }
            setDelayList([...tempList])
            i++
        }
        const delayInterval = setInterval(increment, 50)
    }, [])

    return (
        <div className="name-box">
            <div className="col">
                <p className={!delayList[0] ? "letter-start" : "letter-finish"}>
                    K
                </p>
            </div>
            <div className="col">
                <p className={!delayList[1] ? "letter-start" : "letter-finish"}>
                    A
                </p>
            </div>
            <div className="col">
                <p className={!delayList[2] ? "letter-start" : "letter-finish"}>
                    I
                </p>
            </div>
            <div className="col">
                <p className={!delayList[3] ? "letter-start" : "letter-finish line"}>
                    _
                </p>
            </div>
            <div className="col">
                <p className={!delayList[4] ? "letter-start" : "letter-finish"}>
                    D
                </p>
            </div>
            <div className="col">
                <p className={!delayList[5] ? "letter-start" : "letter-finish"}>
                    E
                </p>
            </div>
            <div className="col">
                <p className={!delayList[6] ? "letter-start" : "letter-finish"}>
                    A
                </p>
            </div>
            <div className="col">
                <p className={!delayList[7] ? "letter-start" : "letter-finish"}>
                    N
                </p>
            </div>
        </div>
    )
}