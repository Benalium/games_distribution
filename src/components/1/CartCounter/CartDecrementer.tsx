import { useCart } from "@/hooks/useCart";
import { Minus } from "lucide-react";

const CartDecrementer = ({ productId }: { productId: number }) => {
  const { ManipulateItemNumberInCart, ManipulateItemNumberInCartOptions } = useCart();
  return (
    <div onClick={e => {
      e.preventDefault();
      ManipulateItemNumberInCart(productId, ManipulateItemNumberInCartOptions.decrement);
    }}>
      <Minus />
    </div>
  )
}

export { CartDecrementer }