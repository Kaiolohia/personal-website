import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";

import "./pagetwo.css"

export default function PageTwo ({inc, dec}) {
    return (
        <div className="background">
            <BackgroundAnimation/>
            <h1 className="temp">
                This page is a work in progess and a place holder for my projects page
                Stand by for future updates found on my <a href="https://www.github.com/Kaiolohia/personal-website">github</a>
            </h1>
        </div>
    )
}