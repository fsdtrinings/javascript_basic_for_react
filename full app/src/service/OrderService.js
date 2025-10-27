import allOrders from "../data/Orders";

// Get all orders (for admin)
export function getAllOrders() {
  console.log("Fetching all orders, total:", allOrders.length);
  return allOrders;
}

// ✅ Safe function with null check
export function getOrdersByUser(appUser) {
  if (appUser == null) {
    // if user not logged in, return empty list
    return [];
  }

  return allOrders.filter((order) => order.user.username === appUser.username);
}

export function linkOrderWithUser(order, appUser) {
  order.user = appUser;
  return order;
}

export function addProductsInOrder(order, products) {
  order.orderProductsList.push(...products);
  return order;
}

export function calculateTotalCostofOrder(order) {
  const total = order.orderProductsList.reduce((sum, p) => sum + p.cost, 0);
  order.totalCost = total;
  order.tax = total * 0.1; // 10% tax
  return order;
}

export function changeOrderStatus(order, status) {
  order.status = status;
  return order;
}
