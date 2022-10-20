import React from "react";
import "./app.css"
import Nav from "./Nav";
import Mainanimation from "./Mainanimation";
import ToProjectsTrigger from "./ToProjectsTrigger";


function App() {
  return (
    <div className="background">
      
      <Nav/>
      <Mainanimation/>
      <ToProjectsTrigger/>
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
