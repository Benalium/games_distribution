import { Link } from 'react-router-dom';
import { useProducts } from '@/hooks/useProducts';
import { cartContext } from '@/providers/CartProvider';
import { sc } from '@/global/styleConstants';
import { css, SerializedStyles } from '@emotion/react';
import { ProductStretched } from '@/styled/1/Product';
import { Changeable } from '@/components/Changeable';
import { useContext, MouseEvent, useState, ReactNode, useEffect } from 'react';
import { Product as ProductModel, SendedProduct } from '@/models/Product';
import { Button } from '@/styled/1/Button';
import { Window } from '@/components/1/Window';
import { AddProductForm } from '../components/1/AddProductForm';
import { Menu } from '@/components/1/Menu';
import { Menu as MenuIcon, Minus, Plus, ShoppingCart } from 'lucide-react';
import { respond } from '@/global/requests';
import { SelectableItem } from '@/styled/1/SelectableItem';
import { CartItem } from '@/providers/CartProvider';
import { Page } from '@/styled/1/Page';
import { WindowTrigger } from '@/components/1/WindowTrigger';
import { UpdateProductForm } from '@/components/1/UpdateProductForm';
import styled from '@emotion/styled'
import React from 'react';
import { useCart } from '@/hooks/useCart';
import { useAuthorization } from '@/hooks/useAuthorization';
import { Counter } from '@/styled/1/Counter';
import { CartIncrementer } from '@/components/1/CartCounter/CartIncrementer';
import { CartDecrementer } from '@/components/1/CartCounter/CartDecrementer';
const defaultProducts: ProductModel[] = [
  {
    name: "GTA Vice City",
    price: 35,
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-JVYkP1wsMX3aaGdR24V-gYpEBlwI7nSqQ&s"
  },
  {
    name: "The Witcher",
    price: 40,
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxVE2YCQjtQGNVZyIrrxviGA1KobyZUoFkQ&s'
  }
]
const localStyled = {
  CartButton: () =>
    <Link to='/cart'>
      <Button css={{
        backgroundColor: sc.primaryColor.advanced.highlighted,
        alignSelf: 'flex-end'
      }}>
        <ShoppingCart />
      </Button>
    </Link>,
  Header: styled.div({
    display: 'flex',
    gap: sc.offsets.l,
    justifyContent: 'flex-end'
  }),
  AddProductButton: ({ onClick }: {
    onClick: () => void
  }) =>
    <Button onClick={() => { onClick(); }}>
      +
    </Button>,
  AddToCartButton: ({ onClick }: { onClick: () => void }) =>
    <Button
      onClick={e => { e.preventDefault(); onClick(); }}>
      Add to cart
    </Button>,
  ActionMenu: ({ children }: { children: ReactNode }) =>
    <Menu icon={<MenuIcon />}>
      {children}
    </Menu>
}

// Local components

const localComponents = {
  ItemDeleter: ({ onClick, deleteProduct }: {
    onClick?: () => void
    deleteProduct: () => void
  }) => {
    return (
      <SelectableItem onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        onClick && onClick();
        deleteProduct();
      }}>
        Remove
      </SelectableItem>
    )
  },
  ItemUpdater: ({ product, onClick, onSubmit }: {
    product: ProductModel
    onClick?: () => void
    onSubmit: (product: SendedProduct) => void
  }) => {
    console.log('ItemUpdater', product)
    return (
      <WindowTrigger
        trigger={
          <SelectableItem onClick={() => {
            onClick && onClick();
          }}>
            Update
          </SelectableItem>
        }
        window={
          <Window>
            <UpdateProductForm
              product={product}
              onSubmit={(product) => onSubmit(product)} />
          </Window>
        }
      />
    )
  }
}

const mappedData = {
  Products: ({ product, userRole, cartItem, addToCart, updateProduct, deleteProduct }: {
    product: ProductModel
    userRole: string | undefined
    cartItem: CartItem | undefined
    addToCart: ReturnType<typeof useCart>['addToCart']
    updateProduct: ReturnType<typeof useProducts>['updateProduct']
    deleteProduct: ReturnType<typeof useProducts>['deleteProduct']
  }) =>
    <Link to={`/products/${product.id}`}
      key={product.id}>
      <ProductStretched
        mainInfo={
          <>
            {
              userRole && userRole === "advanced" &&
              <localStyled.ActionMenu>
                <localComponents.ItemDeleter
                  deleteProduct={() => deleteProduct(product.id)} />
                <localComponents.ItemUpdater
                  product={product}
                  onSubmit={(sendedProduct) => updateProduct(product.id, sendedProduct)} />
              </localStyled.ActionMenu>
            }
            ${product.price}
            {
              cartItem && cartItem.quantity > 0
                ?
                <Counter>
                  <CartIncrementer productId={product.id} />
                  {cartItem?.quantity}
                  <CartDecrementer productId={product.id} />
                </Counter>
                :
                <localStyled.AddToCartButton onClick={() => {
                  addToCart(product.id);
                }} />
            }
          </>
        }
        imageUrl={product.image}
        title={product.name} />
    </Link>
}

const Products = () => {
  const { products, updateProduct, deleteProduct, createProduct /*: tempProducts*/ } = useProducts();
  const { cart, addToCart } = useCart();
  /* const products = tempProducts.length ? tempProducts : defaultProducts */
  const { user } = useAuthorization();
  const [isAddProductWindowOpen, setIsAddProductWindowOpen] = useState(false);
  return (
    <Page>
      <localStyled.Header>
        {user.role == "advanced" &&
          <Button>
            <Link to="/register">
              Register
            </Link>
          </Button>}
        {user.role == "advanced" && <localStyled.AddProductButton onClick={() => setIsAddProductWindowOpen(true)} />}
        <localStyled.CartButton />
      </localStyled.Header>
      {
        products.map(product => {
          const cartItem = cart.find(c => c.productId === product.id);
          return (mappedData.Products({
            product,
            userRole: user.role,
            cartItem,
            addToCart,
            updateProduct,
            deleteProduct
          }))
        })
      }
      {
        isAddProductWindowOpen &&
        <Window onClose={() => setIsAddProductWindowOpen(false)}>
          <AddProductForm onClick={(product) => { createProduct(product) }} />
        </Window>
      }
    </Page>
  )
}
export { Products };
