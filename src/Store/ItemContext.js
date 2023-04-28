import React, { createContext, useEffect, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("OrderData"));
    setItems(storedData);
  }, []);

  const addItem = (item) => {
    setItems((prev) => {
      const updatedItems = [...prev, item];
      localStorage.setItem("OrderData", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const deleteItem = (id) => {
    setItems((prev) => {
      const updatedItems = prev.filter((item) => item.id !== id);
      localStorage.setItem("OrderData", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <ItemContext.Provider value={{ items, addItem, deleteItem }}>
      {props.children}
    </ItemContext.Provider>
  );
};
