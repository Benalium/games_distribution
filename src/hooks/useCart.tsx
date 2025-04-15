import { cartContext } from "@/providers/CartProvider"
import { useContext } from "react"
import { useProducts } from "./useProducts"

const useCart = () => {
  const { cart, setCart } = useContext(cartContext)
  const { products, getProductById } = useProducts();
  const addToCart = (productId: number) => {
    // Not found in DB
    if (getProductById(productId) === undefined) {
      return
    }
    const targetProduct = cart.find(item => item.productId === productId);
    // Already in cart
    if (targetProduct) {
      return
    }
    const addedProduct = { productId: productId, quantity: 1 }
    setCart([addedProduct, ...cart])
  }
  const ManipulateItemNumberInCartOptions = {
    increment: (n: number) => n + 1,
    decrement: (n: number) => n - 1
  }
  const ManipulateItemNumberInCart = (
    productId: number,
    operation: (n: number) => number
  ) => {
    // Not found in DB
    if (getProductById(productId) === undefined) {
      const cartWithoutNonActual = cart.filter(item =>
        products.some(product => product.id === item.productId)
      )
      setCart(cartWithoutNonActual)
    }
    const cartCopy = [...cart];
    const targetCartItem = cartCopy.find(item => item.productId === productId);
    // Not found in cart
    if (!targetCartItem) {
      return
    }
    const newQuantity = operation(targetCartItem.quantity)
    if (newQuantity <= 0) {
      const newCart = cartCopy.filter(item => item.productId !== productId);
      setCart(newCart);
    } else {
      targetCartItem.quantity = newQuantity;
      setCart(cartCopy);
    }
  }
  const clearCart = () => {
    setCart([]);
  }
  return { cart, addToCart, ManipulateItemNumberInCart, ManipulateItemNumberInCartOptions, clearCart }
}

export { useCart }