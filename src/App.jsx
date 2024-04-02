import { useState } from "react";
import itachi from "./assets/images.jpg";

import "./App.css";
import StarRating from "/StarRating.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <img className="img" src={itachi} />
        <h1 className="name">Itachi Uchiwa</h1>

        <StarRating />
      </div>
    </>
  );
}

export default App;
