import { useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { sc } from '../global/styleConstants';
import { useProducts } from '@/hooks/useProducts';
import { PropVal } from '@/styled/1/PropVal';
import { Page } from '@/styled/1/Page';


const defaultStyle = {
  self: css({
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    gap: sc.offsets.l
  }),
  title: css({
    fontSize: sc.offsets.xl
  }),
  image: css({
    maxHeight: '400px',
    objectFit: 'scale-down',
  }),
  description: {
    self: css({
      margin: `${sc.offsets.l} 0`
    })
  }
}

const ProductInfo = () => {
  const { id } = useParams();
  const { products } = useProducts()
  console.log('Products:', products)
  const product = products.find(p => p.id === Number(id))
  return (
    product
      ?
      <Page>
        <div css={defaultStyle.self}>
          <div css={defaultStyle.title}>
            {product.name}
          </div>

          <img
            src={product.image}
            css={defaultStyle.image} />

          <div css={{ display: 'flex', flexDirection: 'column', gap: sc.offsets.s }}>
            <PropVal property='Publisher' value={product.publisher} />
            <PropVal property='Platform' value={product.platform} />
            <PropVal property='Genre' value={product.genre} />
          </div>


          <div css={defaultStyle.description}>
            {product.description}
          </div>
        </div>
      </Page>
      :
      <div>product not found</div>
  )
}

export default ProductInfo