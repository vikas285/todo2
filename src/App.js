import { useState } from "react";
import "./App.css";
import List from "./Component/List";
function App() {
const[ value1 , setValue] = useState("")
const[ ...Last , value] = useState([])

const Change = (e) =>{
setValue(e.target.value)
let value2 = value1
}

const Click = ( )=>{



}


  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
      >
        <input onChange={Change} type="text" placeholder="write here" />
        <button onClick={Click}  >ADD</button>
      </div>
      <div className="App">
        <List />
      </div>
    </div>
  );
}

export default App;
