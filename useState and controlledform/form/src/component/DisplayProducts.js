import { useState } from "react";
import ProductService from "../service/ProductService";

// Note : 
// React re-renders only when state or props reference changes — not just their contents
const DisplayProducts = ()=>{

    let [allProducts,setAllProducts] = useState([]);

    function showProducts()
    {
        const products = ProductService.getAllProducts();
        //setAllProducts(products);  // this will give us an issue 
        /*
        But ProductService.getAllProducts() returns the same array reference (productList), just with new items pushed inside.
So even though its contents changed, React doesn’t detect a new state value — because the array reference didn’t change.
     React compares references, not contents. If you pass the same object/array reference to setState, it won’t re-render.
        */
       setAllProducts([...ProductService.getAllProducts()]);
       /**
        The [...] (spread operator) creates a new array copy.Now React can detect that state has changed and re-render the UI. 
       */
        console.log("Display Button Clicked & products fetched :- " + products.length);
        
    }
  
    console.log("Outside ShowProduct Handler :- " + allProducts.length);

    return(

        <div>
                <button onClick={showProducts}>Display Products</button>
                <table>
                    <thead>
                        <th>Product name</th>
                        <th>Cost</th>
                        <th>Category</th>
                        
                    </thead>
                    <tbody>
                        {allProducts.map((p,index)=>(
                            <tr key={index}>
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