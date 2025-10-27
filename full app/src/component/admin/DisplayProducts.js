import React, { useState } from "react";
import { getAllProducts } from "../../service/ProductService";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  // Load products on button click
  function loadProducts() {
    const all = getAllProducts();
    setProducts(all);
    setFilteredProducts(all); // Initially, all products
  }

  function doFilterProducts() {
    const txt = searchText.toLowerCase(); // input is coming from text field
    const filtered = products.filter((p) => { 
      const catMatch = filterCategory ? p.category == filterCategory : true;  // catFilter is coming from select
      const txtMatch =
        searchText == "" ||
        p.productName.toLowerCase().includes(txt) ||
        p.category.toLowerCase().includes(txt) ||
        p.brand.toLowerCase().includes(txt);
      return catMatch && txtMatch;
    });
    setFilteredProducts(filtered);
  }

  function handleDelete(index) {
    products.splice(index, 1);
    setProducts([...products]);
    doFilterProducts(); // Reapply filter after delete
  }

  function handleUpdateCost(index) {
    const newCost = prompt("Enter new cost:", products[index].cost);
    if (newCost != null) {
      products[index].cost = Number(newCost);
      setProducts([...products]);
      doFilterProducts(); // Reapply filter after update
    }
  }
  // code to load the prduct categorries from the product arrays for select
 const categories = [];
for (let i = 0; i < products.length; i++) {
  const cat = products[i].category;
  if (!categories.includes(cat)) {
    categories.push(cat);
  }
}

  return (
    <div>
      <h3>All Products</h3>
      <button onClick={loadProducts}>Load Products</button>

      {products.length > 0 && (
        <div>
          {/* Filters */}
          <div style={{ marginTop: "10px" }}>
            <select
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value);
                doFilterProducts();
              }}
            >
              <option value="">All Categories</option>
              {   // adding categories
                categories.map((c, idx) => (
                <option key={idx} value={c}>{c}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Search by Name, Category or Brand"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                doFilterProducts();
              }}
            />
          </div>

          {/* Product Table */}
          <table border="1" width="100%" style={{ marginTop: "10px" }}>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Cost</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p, idx) => (
                <tr key={idx}>
                  <td>{p.productName}</td>
                  <td>{p.cost}</td>
                  <td>{p.category}</td>
                  <td>{p.brand}</td>
                  <td>
                    <button onClick={() => handleUpdateCost(idx)}>Update</button>{" "}
                    <button onClick={() => handleDelete(idx)}>Delete</button>
                  </td>
                </tr>
              ))}
              {filteredProducts.length == 0 && (
                <tr>
                  <td colSpan="5">No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DisplayProducts;
