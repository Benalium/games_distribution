
import { Dispatch, SetStateAction, createContext, FC, useState, ReactNode, cloneElement, ReactElement } from 'react';

// Context //

type CartItem = {
  productId: number,
  quantity: number
};
const cartContext = createContext<{
  cart: CartItem[]
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}>({
  cart: [],
  setCart: () => { }
});

// Component //

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  )
}

export { CartProvider, cartContext, CartItem };
