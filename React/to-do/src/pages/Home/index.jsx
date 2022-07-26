import { useState, useEffect } from "react";
import ListItem from "./components/ListItem";
import Search from "./components/Search";

const dataFromApi = [
  {
    id: 1,
    name: "item 1",
    isCompleted: false,
  },
  {
    id: 2,
    name: "item 2",
    isCompleted: true,
  },
  {
    id: 3,
    name: "item 3",
    isCompleted: false,
  },
];

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setItems(dataFromApi);
    setLoading(true);
    // CALL API
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [inputCreateValue, setInputCreateValue] = useState(null);
  const [inputSearchValue, setInputSearchValue] = useState(null);

  const addItem = () => {
    setItems([
      {
        id: Math.random(),
        name: inputCreateValue,
        isCompleted: false,
      },
      ...items,
    ]);
  };

  const removeItem = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleOnchangeInput = (event) => {
    setInputCreateValue(event.target.value);
  };

  const handleOnchangeInputSearch = (event) => {
    setInputSearchValue(event.target.value);
  };

  const search = () => {
    setLoading(true);
    setTimeout(() => {
      setItems(
        dataFromApi.filter((item) => item.name.search(inputSearchValue) !== -1)
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="App">
      {loading && (
        <div className="loading-box">
          <div className="loader"></div>
        </div>
      )}

      <h2>Todo app pro</h2>

      {/* Form Create Item */}
      <div>
        <input onChange={handleOnchangeInput} type="text" />
        <button onClick={addItem}>Create</button>
      </div>
      <Search handleOnchangeInput={handleOnchangeInputSearch} search={search} />
      <ListItem handleRemoveItem={removeItem} items={items} />
    </div>
  );
}

export default Home;
