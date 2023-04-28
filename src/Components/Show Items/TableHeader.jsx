import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr className="head-tr">
        <th>Order ID</th>
        <th>Dish</th>
        <th>Price</th>
        <th>Table</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
