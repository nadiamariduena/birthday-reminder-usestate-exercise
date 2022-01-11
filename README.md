## [Birthday Reminder](https://youtu.be/a_7Z7C_JCyo)

- Check the [ link | 7:20 ](https://youtu.be/a_7Z7C_JCyo) to see all the projects

<br>

##### credits images:

[Cottonbro](https://www.pexels.com/@cottonbro/collections/)

[Joel Mott](https://unsplash.com/@joelmott)

[Allef Vinicius](https://unsplash.com/@seteph)

[Binh Ly](https://unsplash.com/@binhly)

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

<br>

#### Now that we have the data, .map it

```javascript
    {people.map((people) => {
```

#### Destructure it, so to grab what we want from the data.js

```javascript
const { id, image, name, age } = people;
```

<br>

#### Use the data

```javascript
{
  people.map((people) => {
    const { id, image, name, age } = people;
    return (
      <div key={id} className="containerList">
        <img className="img-box" src={image} alt="" />
      </div>
    );
  });
}
```

#### This what I have until now, but I would like to add the option to delete each profile

```javascript
import React, { useState } from "react";
import "./App.css";
import { data } from "./data";
import List from "./List";

//

//
//
function App() {
  const [people, setPeople] = React.useState(data);

  const clearList = (id) => {
    setPeople((people) => {
      let newPeople = people.filter((people) => people.id !== id);
      return newPeople;
    });
  };
  return (
    <>
      <section id="App">
        <div id="App-container">
          <h1>{people.length} Birthday today</h1>
          <List people={people} />

          <button
            className="btn-card"
            type="button"
            onClick={() => setPeople([])}
          >
            clear all
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
```
