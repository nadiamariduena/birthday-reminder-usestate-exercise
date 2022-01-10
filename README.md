## [Birthday Reminder](https://youtu.be/a_7Z7C_JCyo)

- Check the [ link | 7:20 ](https://youtu.be/a_7Z7C_JCyo) to see all the projects

<br>

##### credits images:

- [Cottonbro](https://www.pexels.com/@cottonbro/collections/)

<br>
<br>

#### We will start by grabbing the data from the data.js

<br>

- If you notice, we are not adding a variable name to the data.js, that s why we dont need to pass it like so {data }:

> import {data } from "./data";

<br>

#### With this we are ready to use the data coming from the data.js

```javascript
const [people, setPeople] = useState(data);
```

<br>

#### With {people.length}, we will see in real time how many users or birthdays we have inside the data.js

```javascript
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
```

<br>

#### Now we are ready to pass the data from data.js through PROPS to the List component

> <List people={people} />

<br>

#### List component

```javascript
const List = ({ people }) => {
```
