import { useState, useEffect } from "react";
import ProductService from "../service/ProductService";

const DisplayProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  // Fetch all products on component load
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const products = await ProductService.getAllProducts();
    setAllProducts(products);
  }

    return(

        <div>
                <button onClick={fetchProducts}>Display Products</button>
                <table>
                    <thead>
                        <th>Product Code</th>
                        <th>Product name</th>
                        <th>Cost</th>
                        <th>Category</th>
                        
                    </thead>
                    <tbody>
                        {allProducts.map((p,index)=>(
                            <tr key={index}>
                                <td>{p.pcode}</td>
                                <td>{p.productName}</td>
                                <td>{p.cost}</td>
                                <td>{p.category}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );

}
export default DisplayProducts;