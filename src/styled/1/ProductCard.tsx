import { sc } from '@/global/styleConstants'
import styled from '@emotion/styled'

const template = {
  Self: styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: sc.offsets.s,
  }),
  Image: styled.img({
    objectFit: 'cover'
  }),
  Title: styled.h1({

  })
}

type Props = {
  title: string
}

const ProductCard = ({ title }: Props) =>
  <template.Self>
    <template.Title>
      {title}
    </template.Title>
  </template.Self>

export { ProductCard }