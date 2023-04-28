import React, { useContext, useState } from "react";
import "./AddItems.css";
import { ItemContext } from "../../Store/ItemContext";

const AddItems = () => {
  const { addItem } = useContext(ItemContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [table, setTable] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleTableChange = (e) => setTable(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || price.trim() === "" || table === "Select Table") {
      alert("Please fill up all the fields properly");
    } else {
      const newItem = {
        id: Math.floor(Math.random() * 999999999999).toString(),
        name: name,
        price: price,
        table: table,
      };
      addItem(newItem);
      setName("");
      setPrice("");
      setTable("");
    }
  };

  return (
    <div className="container">
      <h2>Enter Order Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__inputs">
          <label htmlFor="name">Dish Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="form__inputs">
          <label htmlFor="price">Dish Price(₹)</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
        </div>

        <div className="form__inputs">
          <label htmlFor="table">Ordered Table</label>
          <select id="table" value={table} onChange={handleTableChange}>
            <option value="Select Table">Select Table</option>
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
          </select>
        </div>

        <div className="submit">
          <button type="submit">Submit Order</button>
        </div>
      </form>
    </div>
  );
};
export default AddItems;
