import "./App.css";
import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import Input from "./components/Input";

function App() {
  let items = [
    { title: "item 1", id: 1, isDone: false },
    { title: "item 2", id: 2, isDone: true },
    { title: "item 3", id: 3, isDone: false },
  ];

  const [stateItems, setItems] = useState(items);

  function marDone({ e, index }) {
    console.log(index);
    console.log(e);
    let newUsers = [...stateItems];
    newUsers[index].isDone = e;

    setItems(newUsers);
  }

  function removeItem({ e, index }) {
    console.log(index);
    console.log(e);
    let newItems = [...stateItems].filter(function (item) {
      return item.id !== index + 1;
    });

    setItems(newItems);
  }

  function addItem({ itemText }) {
    let newItems = [...stateItems];

    let newItem = { id: stateItems.length + 1, title: itemText, isDone: false };
    newItems.push(newItem);
    setItems(newItems);
  }

  function removeAllDone() {
    let newItems = [...stateItems].filter(function (item) {
      return item.isDone !== true;
    });

    setItems(newItems);
  }

  return (
    <div className="App">
      <Input onItemSubmit={addItem} />
      <ul>
        {stateItems.map((item, index) => (
          <li key={item.id}>
            <Item
              item={item.title}
              isDone={item.isDone}
              index={index}
              onItemChange={marDone}
              onItemDelete={removeItem}
            />
          </li>
        ))}
      </ul>

      <button onClick={(e) => removeAllDone()}>Remove all done</button>
    </div>
  );
}

export default App;
