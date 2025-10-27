import { useState } from "react";
import ProductService from "../service/ProductService";

const ProductForm = ()=>{

    let [pcode,setPcode] = useState(0);
    let [productName,setProductName] = useState("");
    let [cost,setCost] = useState(0);
    let [category,setCategory] = useState("");
    let [statusMsg,setStatusMsg] = useState("");

   async function handleSubmit(e)
    {
        e.preventDefault();

        /* temporary business object */
        let newProduct = {
            productName,
            cost,
            category
        };

        try 
        {
            await ProductService.addProduct(newProduct); // POST to backend
            setStatusMsg(`Product "${productName}" added successfully!`);
            setProductName("");
            setCategory("");
            setCost(0);
        } 
        catch (err) {
        setStatusMsg("Error adding product!");
        }
        
    }

    return(
        <div>
            <h3> Add  Product Form</h3>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Product Name</td>
                        <td><input type="text" value={productName} onChange={(e)=>{setProductName(e.target.value)}}/> </td>
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