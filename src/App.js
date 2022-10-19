import React from "react";
import "./app.css"
import Nav from "./Nav";
import Mainanimation from "./Mainanimation";


function App() {
  return (
    <div className="background">
      
      <Nav/>
      <Mainanimation/>
      <div className="animation-box">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
      </div>
    </div>
  );
}

export default App;
