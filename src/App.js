import React, { useState } from "react";
import "./App.css";
import { data } from "./data";
import Landscape from "./Landscape";
import List from "./List";

//

//
//
function App() {
  const [people, setPeople] = React.useState(data);

  // const clearList = (id) => {
  //   setPeople((people) => {
  //     let newPeople = people.filter((people) => people.id !== id);
  //     return newPeople;
  //   });
  // };
  return (
    <>
      <main>
        <div className="container">
          <h3>{people.length} Birthday today</h3>
          <List people={people} />
        </div>
        <button
          className="btn-card"
          type="button"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </main>
      <Landscape />
    </>
  );
}

export default App;
