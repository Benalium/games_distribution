import { PropVal } from "@/styled/1/PropVal";
import { css } from "@emotion/react";
import { sc } from '@/global/styleConstants';
import { useReceipts } from "@/hooks/useReceipts";
import { Page } from "@/styled/1/Page";
import { Card } from "./1/Card";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "@/styled/1/ProductCard";
import { Product } from "@/models/Product";
import styled from '@emotion/styled'
import { Link } from "react-router-dom";
import { StyledLink } from "@/styled/1/StyledLink";

const Items = styled.div({
  display: 'flex',
  gap: sc.offsets.m
})

const Orders = () => {
  const { receipts } = useReceipts()
  const { products } = useProducts()
  console.log(receipts)
  return (
    <Page>
      {
        receipts.
          sort((a, b) => { console.log(a.dateTime); return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime() })
          .map(receipt =>
            <Card key={receipt.id}>
              <PropVal
                property="User"
                value={String(receipt.user.login)} />
              <PropVal
                property="Time"
                value={String(receipt.dateTime)} />
              <Items>
                {
                  receipt.items.map(item => {
                    const product = products.find(p => p.id == item.productId) as Product
                    return (
                      <Link to={`/products/${item.productId}`}>
                        <StyledLink>
                          <ProductCard
                            title={product?.name ?? ''}
                          />
                        </StyledLink>
                      </Link>
                    )
                  })
                }
              </Items>
            </Card>
          )
      }
    </Page>
  )
}

export default Orders;