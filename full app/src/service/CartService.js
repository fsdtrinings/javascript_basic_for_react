import Cart from "../data/Cart";

export function getCartByUser(user) 
{
  let userCart = Cart.find((c) => c.user?.username === user.username);
  if (!userCart) {
    userCart = { user, products: [], totalCost: 0 };
    Cart.push(userCart);
  }
  return userCart;
}

export function addProductInCart(product, user) {
  let userCart = getCartByUser(user);
  userCart.products.push(product);
  userCart.totalCost = userCart.products.reduce((sum, p) => sum + p.cost, 0);
  return userCart;
}
