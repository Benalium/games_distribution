import { ReactNode } from "react"
import { sc } from '@/global/styleConstants';
import styled from '@emotion/styled'
import { ComponentStyle } from "@/global/ComponentStyle";

const template = {
  Self: styled.div({
    overflow: 'hidden',
    ...sc.borderRadiusTemplates.m,
    height: 'fit-content',
    display: 'flex',
    cursor: 'pointer',
    width: '100%',
    backgroundColor: sc.theme.basic[2],
    '&:hover': {
      backgroundColor: sc.theme.basic[4]
    }
  }),
  Image: styled.img({
    height: '160px',
    width: '160px',
    objectFit: 'cover'
  }),
  right: {
    Self: styled.div({
      ...sc.paddingTemplates.h.m,
      flexGrow: '1',
      display: 'flex',
      flexDirection: 'column'
    }),
    Title: styled.div({
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }),
    main: {
      Self: styled.div({
        display: 'flex',
        flexGrow: '1',
      }),
      Right: styled.div({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 'auto'
      })
    }
  }
} as const

type Style = ComponentStyle<typeof template>

type Props = {
  imageUrl?: string
  title?: ReactNode
  mainInfo?: ReactNode
  additionalInfo?: ReactNode
  style?: Style
}

const ProductStretched = ({ imageUrl, title, mainInfo, additionalInfo, style }: Props) =>
  <template.Self css={style?.Self}>
    <template.Image src={imageUrl} css={style?.Image} />
    <template.right.Self css={style?.right?.Self}>
      <template.right.Title css={style?.right?.Title}>
        {title}
      </template.right.Title>
      <template.right.main.Self css={style?.right?.main?.Self}>
        {additionalInfo}
        <template.right.main.Right css={style?.right?.main?.Right}>
          {mainInfo}
        </template.right.main.Right>
      </template.right.main.Self>
    </template.right.Self>
  </template.Self>


export { ProductStretched, Style as ProductStyle }