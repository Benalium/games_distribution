import { sc } from '@/global/styleConstants'
import { css, SerializedStyles } from "@emotion/react";
import { ReactNode } from 'react';
import styled, { StyledComponent } from '@emotion/styled'
import { ComponentStyle } from '@/global/ComponentStyle';

const Template = styled.div({
  display: 'flex',
  gap: sc.offsets.xs
})

type Style = SerializedStyles

type PropValProps = {
  property: String,
  value?: String,
  style?: Style
}

const PropVal = ({ property, value, style }: PropValProps) => {
  return (
    <Template css={style}>
      {property}: {value}
    </Template>
  )
}

export { PropVal }