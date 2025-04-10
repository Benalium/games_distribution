import { css } from '@emotion/react';
import { sc } from '@/global/styleConstants';
import { ReactNode } from 'react';
import styled from '@emotion/styled'
import { Nav } from '@/components/1/Nav';

const Template = styled.div({
  display: 'flex',
  gap: sc.offsets.xl,
  flexGrow: '1'
})
const NavigationLayout = ({ children }: { children: ReactNode }) =>
  <Template>
    <Nav>
      Test
    </Nav>
    {children}
  </Template>

export { NavigationLayout }