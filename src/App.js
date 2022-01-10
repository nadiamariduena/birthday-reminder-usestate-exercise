import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

//

//
//
function App() {
  const [people, setPeople] = useState(data);

  const clearList = () => {};
  return (
    <>
      <section id="App">
        <div id="App-container">
          <h1>{people.length} Birthday today</h1>
          <List people={people} />
          <button className="btn-card" type="button" onClick={clearList}>
            clear all
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
