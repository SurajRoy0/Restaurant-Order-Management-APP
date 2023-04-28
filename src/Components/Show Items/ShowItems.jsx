import React from "react";
import "./ShowItems.css";
import Items from "./Items";
import TableHeader from "./TableHeader";

const ShowItems = () => {
  return (
    <div className="table-main-container">
      <h1>Order Summary</h1>
      <div className="table-container">
        <div className="main-table">
          <h2>Table 1</h2>
          <table className="table">
            <TableHeader />
            <tbody className="table-data">
              <Items tableNo="Table 1" />
            </tbody>
          </table>
        </div>
        <div className="main-table">
          <h2>Table 2</h2>
          <table className="table">
            <TableHeader />
            <tbody className="table-data">
              <Items tableNo="Table 2" />
            </tbody>
          </table>
        </div>
        <div className="main-table">
          <h2>Table 3</h2>
          <table className="table">
            <TableHeader />
            <tbody className="table-data">
              <Items tableNo="Table 3" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowItems;
