import React from "react";
import { getCartByUser } from "../../service/CartService";
import { addProductsInOrder, calculateTotalCostofOrder, linkOrderWithUser } from "../../service/OrderService";
import allOrders from "../../data/Orders";

const UserCart = (props) => {

   const user = props.user;
  
    if (!user) return <p>Please login first!</p>;

  const cart = getCartByUser(user); 

  function handlePlaceOrder() {
    
    if (cart.products.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const newOrder = {
      orderNumber: Date.now(),
      user: user,
      orderProductsList: [...cart.products],
      totalCost: 0,
      status: "New Order",
    };

    calculateTotalCostofOrder(newOrder);
    linkOrderWithUser(newOrder, user);
    addProductsInOrder(newOrder, cart.products);

    allOrders.push(newOrder);

    alert(`Order #${newOrder.orderNumber} placed successfully!`);

    // Clear cart
    cart.products.length = 0;
    cart.totalCost = 0;

   
  }//end handlePlaceOrder

  return (
    <div>
      <h3>My Cart</h3>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {cart.products.map((p, idx) => (
            <tr key={idx}>
              <td>{p.productName}</td>
              <td>{p.cost}</td>
            </tr>
          ))}
          {cart.products.length === 0 && (
            <tr>
              <td colSpan="2">Cart is empty</td>
            </tr>
          )}
          {cart.products.length > 0 && (
            <tr>
              <td>Total</td>
              <td>{cart.totalCost}</td>
            </tr>
          )}
        </tbody>
      </table>

      {cart.products.length > 0 && (
        <button style={{ marginTop: "10px" }} onClick={handlePlaceOrder}>
          Place Order
        </button>
      )}
    </div>
  );
};

export default UserCart;
