import React, { useState } from "react";

function Input({ onItemSubmit }) {
  let item = "";

  const [newItem, setNewItem] = useState(item);

  const saveItem = (event) => {
    event.preventDefault();

    let itemText = newItem;
    onItemSubmit({ itemText });
    setNewItem("");
  };
  return (
    <div className="input-msg">
      <form onSubmit={saveItem}>
        <input
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          type="text"
          autoFocus={true}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Input;
