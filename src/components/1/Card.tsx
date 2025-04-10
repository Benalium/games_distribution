import { sc } from '@/global/styleConstants'
import styled from '@emotion/styled'

const Card = styled.div({
  border: `${sc.theme.advanced.contrast} solid 1px`,
  ...sc.paddingTemplates.h.l,
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: sc.offsets.m
})

export { Card }