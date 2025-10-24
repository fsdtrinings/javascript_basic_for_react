let productList = [];

const ProductService = 
{
  addProduct: function (p) {
    productList.push(p);
     console.log("Inside Product Service addProduct method "+productList.length);
  },


  getAllProducts: function () {
   console.log("Producy Service get All Products Called "+productList.length);
   
    return productList;
  },


};

export default ProductService;

/*
Old Simple Java Script Version 

// ProductService.js

let productList = [];

function addProduct(p) {
  productList.push(p);
}

function getAllProducts() {
  return productList;
}

export { addProduct, getAllProducts };

But issue is while importing in another component 
we have to import all methods saperatly 
so here we just grouped in one variable that variable name
in our case is " ProductService "

*/