import { sc } from "@/global/styleConstants"
import styled from '@emotion/styled'

const Page = styled.div({
  flexGrow: '1',
  display: 'flex',
  flexDirection: 'column',
  gap: sc.offsets.xl,
  alignItems: 'center',
  marginRight: sc.offsets.xl,
  marginTop: sc.offsets.l
});

export { Page }