import { sc } from "@/global/styleConstants"
import styled from '@emotion/styled'

const StyledLink = styled.div({
  color: sc.primaryColor.basic[800],
  "&:hover": {
    color: '#FF0000'
  }
})

export { StyledLink }