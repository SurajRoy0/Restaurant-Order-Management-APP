import React, { useContext } from "react";
import { ItemContext } from "../../Store/ItemContext";

const Items = (props) => {
  const { items, deleteItem } = useContext(ItemContext);

  const handleDeleteClick = (itemId) => {
    deleteItem(itemId);
  };

  return (
    <>
      {items &&
        items
          .filter((item) => item.table === props.tableNo)
          .map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>{props.tableNo}</td>
              <td>
                <button onClick={() => handleDeleteClick(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
    </>
  );
};

export default Items;
