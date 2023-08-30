import React from "react";

function Item({ item, isDone, index, onItemChange, onItemDelete }) {
  const changeItem = (e) => {
    onItemChange({ e, index });
  };

  const removeItem = (e) => {
    onItemDelete({ e, index });
  };

  return (
    <div>
      {item}{" "}
      <input
        type="checkbox"
        checked={isDone}
        onChange={(e) => changeItem(e.target.checked)}
      ></input>
      <button onClick={(e) => removeItem(e)}>Remove</button>
    </div>
  );
}

export default Item;
