import AllProducts from "../data/Products";

export function addProduct(product) {
  console.log("----- Inside Add product Method ----");
  console.log("Total Number of Products before adding "+AllProducts.length);
  AllProducts.push(product);
  console.log("Total Number of Products after adding "+AllProducts.length);
  
  return AllProducts;
}

export function getAllProducts() {
  console.log("----------- Inside GetAll Products method ----");
  console.log("Total Number of Products returning "+AllProducts.length);
  return AllProducts;
}

export function getProductByName(productName) {
  return AllProducts.find(
    (p) => p.productName.toLowerCase() === productName.toLowerCase()
  );
}
