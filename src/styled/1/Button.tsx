import { sc } from "@/global/styleConstants"
import styled from '@emotion/styled'

const Button = styled.button({
  width: 'fit-content',
  backgroundColor: sc.theme.advanced.contrast,
  color: sc.theme.basic['1'],
  cursor: 'pointer',
  alignItems: 'center',
  ...sc.paddingTemplates.h.m,
  ...sc.borderRadiusTemplates.m,
  display: 'flex',
  gap: sc.offsets.s,
  '&:active': {
    transform: 'scale(0.95)'
  }
})

export { Button }