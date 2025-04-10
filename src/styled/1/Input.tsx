import { sc } from "@/global/styleConstants"
import { css } from "@emotion/react"
import { ChangeEvent, SyntheticEvent } from "react"
import styled from '@emotion/styled'

const Input = styled.input({
  ...sc.borderRadiusTemplates.full,
  width: '200px',
  ...sc.borderWidths.m,
  border: `solid ${sc.theme.basic[8]}`,
  padding: `0 ${sc.offsets.m}`
})

export { Input }