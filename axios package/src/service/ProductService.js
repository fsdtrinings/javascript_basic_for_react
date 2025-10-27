import axios from 'axios';


const BASE_URL = "http://localhost:7085/fsd";


const ProductService = {

  //async function addProduct(product){
 addProduct: async function (product) {
    try {
      
      const response = await axios.post(`${BASE_URL}/product`, product);
      console.log("Product posted:", response.data);
      return response.data;
    } catch (err) {
      console.error("Error adding product:", err);
      throw err;
    }
  },

  getAllProducts: async function () {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      console.log("Fetched products:", response.data);
      return response.data;
    } catch (err) {
      console.error("Error fetching products:", err);
      return [];
    }
  }
};

export default ProductService;

