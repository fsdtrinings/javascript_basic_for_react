import React, { useState } from "react";
import AllProducts from "../../data/Products";
import { addProductInCart } from "../../service/CartService";

const UserPage = (props) => {
  const user = props.user;

  // All products and filtered products
  const [products] = useState(AllProducts); 
  const [filteredProducts, setFilteredProducts] = useState(AllProducts);

  // Filters
  const [filterCategory, setFilterCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const categories = [...new Set(AllProducts.map((p) => p.category))];

  // Add product to cart
  function addToCartHandler(product) {
    addProductInCart(product, user);
    console.log(" added to cart!");
  }

  // Central filtering function
  function doFilterProducts(category, text) {
    const txt = text.toLowerCase();
    const filtered = products.filter((p) => {
      const catMatch = category ? p.category == category : true;
      const txtMatch =
        text == "" ||
        p.productName.toLowerCase().includes(txt) ||
        p.category.toLowerCase().includes(txt) ||
        p.brand.toLowerCase().includes(txt);
      return catMatch && txtMatch;
    });
    setFilteredProducts(filtered);
  }

  // Handlers
  function handleCategoryChange(category) {
    setFilterCategory(category);
    doFilterProducts(category, searchText);
  }

  function handleSearchChange(text) {
    setSearchText(text);
    doFilterProducts(filterCategory, text);
  }

  return (
    <div>
      <h3>Products</h3>

      {/* Filters */}
      <div style={{ marginBottom: "10px" }}>
        <select
          value={filterCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c, idx) => (
            <option key={idx} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by Name, Category, Brand"
          value={searchText}
          onChange={(e) => handleSearchChange(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>

      {/* Products Table */}
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p, idx) => (
              <tr key={idx}>
                <td>{p.productName}</td>
                <td>{p.cost}</td>
                <td>{p.category}</td>
                <td>{p.brand}</td>
                <td>
                  <button onClick={() => addToCartHandler(p)}>Add to Cart</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No products found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
