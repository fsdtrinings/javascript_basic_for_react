import React, { useState } from "react";
import { getAllOrders, changeOrderStatus } from "../../service/OrderService";

const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState({
    newOrder: false,
    inProcessing: false,
    outDelivery: false,
    pending: false,
    delivered: false,
  });
  const [searchOrderNumber, setSearchOrderNumber] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  // Load all orders
  function loadOrders() {
    const all = getAllOrders();
    setOrders(all);
    setFilteredOrders(all); // initially all orders
  }

  // Filter orders based on checkbox status
  function doFilterBasedOnOrderStatus(statusKey) {
    const updatedStatus = { ...filterStatus, [statusKey]: !filterStatus[statusKey] };
    setFilterStatus(updatedStatus);
    applyFilter(orders, updatedStatus, searchOrderNumber);
  }

  // Handle search input
  function handleSearch(text) {
    setSearchOrderNumber(text);
    applyFilter(orders, filterStatus, text);
  }

  // Apply filters
  function applyFilter(allOrders, statusFilters, searchText) {
    const filtered = allOrders.filter((o) => {
      // Status match
      const statusMatch =
        (!statusFilters.newOrder && !statusFilters.inProcessing &&
         !statusFilters.outDelivery && !statusFilters.pending &&
         !statusFilters.delivered) ||
        (statusFilters.newOrder && o.status == "New Order") ||
        (statusFilters.inProcessing && o.status == "In-processing") ||
        (statusFilters.outDelivery && o.status == "Out of Delivery") ||
        (statusFilters.pending && o.status == "Pending") ||
        (statusFilters.delivered && o.status == "Delivered");

      // Order number match
      const numberMatch =
        searchText == "" || o.orderNumber.toString().includes(searchText);

      return statusMatch && numberMatch;
    });

    setFilteredOrders(filtered);
  }

  // Handle status change for an order
  function updateOrderStatus(orderNumber, newStatus) {
    const order = orders.find((o) => o.orderNumber === orderNumber);
    if (order) {
      changeOrderStatus(order, newStatus);
      setOrders([...orders]);
      applyFilter([...orders], filterStatus, searchOrderNumber); // refresh filteredOrders
      setStatusMsg(`Order #${orderNumber} status updated to ${newStatus}`);
    }
  }

  return (
    <div>
      <h3>Admin User Order Dashboard</h3>
      <br/>
      
      <div>
        <label style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={filterStatus.newOrder}
            onChange={() => doFilterBasedOnOrderStatus("newOrder")}
          />{" "}
          New Order
        </label>

        <label style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={filterStatus.inProcessing}
            onChange={() => doFilterBasedOnOrderStatus("inProcessing")}
          />{" "}
          In-processing
        </label>

        <label style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={filterStatus.outDelivery}
            onChange={() => doFilterBasedOnOrderStatus("outDelivery")}
          />{" "}
          Out of Delivery
        </label>

        <label style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={filterStatus.pending}
            onChange={() => doFilterBasedOnOrderStatus("pending")}
          />{" "}
          Pending
        </label>

        <label style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={filterStatus.delivered}
            onChange={() => doFilterBasedOnOrderStatus("delivered")}
          />{" "}
          Delivered
        </label>

        
        <input
          type="text"
          placeholder="Enter Order Number"
          value={searchOrderNumber}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ marginLeft: "20px" }}
        />

        <button onClick={loadOrders} style={{ marginLeft: "20px" }}>
          Load Orders
        </button>
      </div>

      <table border="1" width="100%" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>User</th>
            <th>Products</th>
            <th>Total Cost</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((o) => (
              <tr key={o.orderNumber}>
                <td>{o.orderNumber}</td>
                <td>{o.user.username}</td>
                <td>
                  {o.orderProductsList.map((p, idx) => (
                    <div key={idx}>
                      {p.productName} - {p.cost}
                    </div>
                  ))}
                </td>
                <td>{o.totalCost}</td>
                <td>{o.status}</td>
                <td>
                  <select
                    value={o.status}
                    onChange={(e) =>
                      updateOrderStatus(o.orderNumber, e.target.value)
                    }
                  >
                    <option>New Order</option>
                    <option>In-processing</option>
                    <option>Out of Delivery</option>
                    <option>Pending</option>
                    <option>Delivered</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop: "10px", color: "green" }}>{statusMsg}</div>
    </div>
  );
};

export default OrderDashboard;
