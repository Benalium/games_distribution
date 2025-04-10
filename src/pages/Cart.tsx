import { cartContext } from '@/providers/CartProvider'
import { useContext, useEffect, useState } from "react";
import { respond } from '@/global/requests';
import { ProductStretched as ProductUI } from '@/styled/1/Product';
import { Product } from '@/models/Product';
import { useProducts } from '@/hooks/useProducts';
import { Button } from '@/styled/1/Button';
import { css } from '@emotion/react';
import { sc } from '@/global/styleConstants';
import { Page } from '@/styled/1/Page';
import { Counter } from '@/styled/1/Counter';
import { CartIncrementer } from '@/components/1/CartCounter/CartIncrementer';
import { CartDecrementer } from '@/components/1/CartCounter/CartDecrementer';
import { useCart } from '@/hooks/useCart';
import { WindowTrigger } from '@/components/1/WindowTrigger';
import { Window } from '@/components/1/Window';
import { motion } from "framer-motion";
import { useReceipts } from '@/hooks/useReceipts';

type CartProduct = {
  product: Product,
  number: number
}

const Cart = () => {
  const { cart } = useContext(cartContext);
  const { clearCart } = useCart()
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
  const cartIds = cart.map(item => item.productId);
  const [isFinished, setIsFinished] = useState(false)
  const { createReceipt } = useReceipts()

  useEffect(() => {
    const fetchProducts = async () => {
      const products: Product[] = await respond({ method: 'GET', params: cartIds }, 'products')
      const formattedProducts = cart.map((cartItem) => {
        const product = products.find(p => p.id === cartItem.productId);
        if (!product) return null
        return {
          product: product,
          number: cartItem.quantity
        };
      }).filter(formattedProduct => formattedProduct !== null);
      setCartProducts(formattedProducts);
    }

    fetchProducts()
  }, [cart])

  const locals1 = {
    ConfirmButton: ({ onClick }: { onClick: () => void }) =>
      <Button
        css={css({
          position: 'fixed',
          bottom: '50px',
          right: '50px',
          backgroundColor: sc.primaryColor.advanced.static
        })}
        onClick={onClick}>
        Confirm
      </Button>
  }

  return (
    <Page>
      {
        cartProducts.map(cartProduct => {
          return (
            <ProductUI
              key={cartProduct.product.id}
              imageUrl={cartProduct.product?.image}
              title={cartProduct.product?.name}
              mainInfo={
                <Counter>
                  <CartIncrementer productId={cartProduct.product.id} />
                  {cartProduct?.number}
                  <CartDecrementer productId={cartProduct.product.id} />
                </Counter>
              } />
          )
        })
      }
      <locals1.ConfirmButton onClick={() => {
        clearCart();
        setIsFinished(true);
        createReceipt();
      }} />
      {isFinished &&
        <motion.div
          css={{ alignSelf: 'center', justifyContent: 'center' }}
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          Congratulations! 🧾
        </motion.div>
      }
    </Page>
  )
}

export { Cart }