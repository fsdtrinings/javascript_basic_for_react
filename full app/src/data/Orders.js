import allUsers from "./AppUsers";
import AllProducts from "./Products";

const allOrders = [

    {   orderNumber:1, 
        orderProductsList : [AllProducts[0],AllProducts[10]],
        totalCost : 49000,
        tax : 4900,
        paymentMode : 'UPI',
        status : 'Delivered',
        user : allUsers[0]
    },

    {   orderNumber:2, 
        orderProductsList : [AllProducts[6],AllProducts[12]],
        totalCost : 30000,
        tax : 3000,
        paymentMode : 'UPI',
        status : 'Delivered',
         user : allUsers[1]
    },
    
    {   orderNumber:3, 
        orderProductsList : [AllProducts[5]],
        totalCost : 145000,
        tax : 14500,
        paymentMode : 'UPI',
        status : 'Pending',
         user : allUsers[1]
    },
    
    /*
     user 0 : one delivered order
     user 1 : one pending and one delivered order
     user 2 : no order so far
    */


];

export default allOrders;