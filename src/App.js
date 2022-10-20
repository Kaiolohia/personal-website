import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree"
import "./app.css"

function App() {
  const [page, setPage] = React.useState(0)
  const [animationDir, setAnimationDir] = React.useState("")

  const incrementPage = () => {
    if (page < 2) {
      setPage(page + 1)
    }
  }

  const decrementPage = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  return (
    <div>
      {page === 0 && <PageOne inc={incrementPage} animationDir={animationDir} setAnimationDir={setAnimationDir}/>}
      {page === 1 && <PageTwo inc={incrementPage} dec={decrementPage} animationDir={animationDir} setAnimationDir={setAnimationDir}/>}
      {page === 2 && <PageThree dec={decrementPage} animationDir={animationDir} setAnimationDir={setAnimationDir}/>}
    </div>
  );
}

export default App;
