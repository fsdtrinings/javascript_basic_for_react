import React from "react";
import { Link } from "react-router-dom";

function HeaderComponent(props) {

  let user = props.user;
  let headerLinks;

  if (user != null && user.role == "user") {
    // for normal user
    headerLinks = (
      <div>
        <Link to="/user/home">Home</Link> 
        <Link to="/user/orders">Order History</Link> 
        <Link to="/user/cart">My Cart</Link> 
        <span>Welcome {user.username}</span>
      </div>
    );
  } else if (user !=null && user.role == "admin") {
    // for admin user
    headerLinks = (
      <div>
        <Link to="/admin/products">Product Dashboard</Link> 
        <Link to="/admin/orders">Order Dashboard</Link> |
        <span>Welcome {user.username}</span>
      </div>
    );
  } else {
    // for guest (not logged in)
    headerLinks = (
      <div>
        <Link to="/signup">Signup</Link> 
        <Link to="/register">Register</Link>
      </div>
    );
  }

  return (
    <div>
      <h3>My Small App</h3>
      <div style={{ textAlign: "right" }}>{headerLinks}</div>
      <hr />
    </div>
  );
}

export default HeaderComponent;
