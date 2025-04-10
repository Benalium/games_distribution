import { Plus } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const CartIncrementer = ({ productId }: { productId: number }) => {
  const { ManipulateItemNumberInCart, ManipulateItemNumberInCartOptions } = useCart()
  return (
    <div onClick={e => {
      e.preventDefault();
      ManipulateItemNumberInCart(productId, ManipulateItemNumberInCartOptions.increment);
    }} >
      <Plus />
    </div>
  )
}

export { CartIncrementer }