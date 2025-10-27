import React, { useState } from "react";
import { addProduct, getAllProducts } from "../../service/ProductService";

const ProductSubmit = () => {
  const [product, setProduct] = useState({
    productName: "",
    cost: "",
    category: "",
    brand: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      ...product,
      cost: Number(product.cost),
    };
    addProduct(newProduct);
    setProduct({ productName: "", cost: "", category: "", brand: "" });
  }

  return (
    <div>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="productName"
            value={product.productName}
            placeholder="Product Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="cost"
            value={product.cost}
            placeholder="Cost"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="category"
            value={product.category}
            placeholder="Category"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="brand"
            value={product.brand}
            placeholder="Brand"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductSubmit;
