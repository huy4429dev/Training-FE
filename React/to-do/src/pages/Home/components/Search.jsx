import React from "react";

export default function Search({search,handleOnchangeInputSearch}) {
  return (
    <div>
      <input type="text" onChange={handleOnchangeInputSearch} />
      <button onClick={search}>Seacrh</button>
    </div>
  );
}
