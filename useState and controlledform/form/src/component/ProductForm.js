import { useState } from "react";
import ProductService from "../service/ProductService";

const ProductForm = ()=>{

    let [productName,setProductName] = useState("");
    let [cost,setCost] = useState(0);
    let [category,setCategory] = useState("");
    let [statusMsg,setStatusMsg] = useState("");

    function handleSubmit(e)
    {
        e.preventDefault(); // preventing the form from dual submission or 

        // empty object
        let newProduct = {
            productName,
            cost,
            category
        };

        ProductService.addProduct(newProduct);

        setStatusMsg("product "+productName+"Added ")
        setProductName("");
        setCategory("")
        setCost(0);
        
    }

    function doRead(e)
    {
        setProductName(e.target.value);
    }

    return(
        <div>
            <h3> Add  Product Form</h3>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Product Name</td>
                        <td><input type="text" value={productName} onChange={doRead}/> </td>
                    </tr>
                    <tr>
                        <td>Product Cost</td>
                        <td><input type="text" value={cost} onChange={(e)=>{setCost(e.target.value)}}/> </td>
                    </tr>
                    <tr>
                        <td>Product category</td>
                        <td><input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}}/> </td>
                    </tr>
                    <button type="submit">Submit</button>
                </table>
            </form>
            <p>{statusMsg}</p>
        </div>
    );

};

export default ProductForm;