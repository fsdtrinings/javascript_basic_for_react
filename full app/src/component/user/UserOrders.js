import React, { useState, useEffect } from "react";
import { getOrdersByUser } from "../../service/OrderService";

const UserOrders = (props) => {
   const user = props.user;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(getOrdersByUser(user));
  }, [user]);

  return (
    <div>
      <h3>My Orders</h3>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Products</th>
            <th>Total Cost</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, idx) => (
            <tr key={idx}>
              <td>{o.orderNumber}</td>
              <td>
                {o.orderProductsList.map((p, i) => (
                  <div key={i}>{p.productName} - {p.cost}</div>
                ))}
              </td>
              <td>{o.totalCost}</td>
              <td>{o.status}</td>
            </tr>
          ))}
          {orders.length === 0 && (
            <tr>
              <td colSpan="4">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrders;
