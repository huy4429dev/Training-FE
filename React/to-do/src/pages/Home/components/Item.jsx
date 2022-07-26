import React from 'react'

export default function Item({item,handleRemoveItemFromItem}) {

  return (
    <li key={item.id} className={item.isCompleted ? "completed" : ""}>
    {item.name}{" "}
    <button
      onClick={() => {
        handleRemoveItemFromItem(item.id);
      }}
    >
      X
    </button>
  </li>
  )
}
