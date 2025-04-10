import { css, SerializedStyles } from "@emotion/react"
import { ReactNode } from "react"
import { sc } from '@/global/styleConstants';
import styled from '@emotion/styled'

const SelectableItem = styled.div({
  ...sc.paddingTemplates.h.s,
  flexGrow: '1',
  '&:hover': {
    backgroundColor: sc.theme.advanced.hover
  }
})

export { SelectableItem }