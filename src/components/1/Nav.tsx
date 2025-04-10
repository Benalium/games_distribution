import { cloneElement, ReactElement, ReactNode, useEffect, useState } from 'react';
import { FC } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { Changeable } from '@/components/Changeable';
import { Link } from 'react-router-dom';
import { Button } from '@/styled/1/Button';
import { sc } from '@/global/styleConstants';
import { SelectableItem } from '@/styled/1/SelectableItem';
import { NavProfile } from '@/styled/1/NavProfile';
import { LogOut } from 'lucide-react';
import styled from '@emotion/styled'
import { useAuthorization } from '@/hooks/useAuthorization';


const selectableItemStaticStyle = {
  borderTopRightRadius: sc.borderRadiuses.s,
  borderBottomRightRadius: sc.borderRadiuses.s
}

const styles = {
  selectableItem: {
    static: css({
      ...selectableItemStaticStyle
    }),
    active: css({
      ...selectableItemStaticStyle,
      backgroundColor: sc.primaryColor.advanced.active,
    })
  }
}

const Template = styled.div({
  backgroundColor: sc.theme.advanced.invisible,
  position: 'sticky',
  top: 0,
  ...sc.borderWidths.m,
  borderRight: `solid ${sc.theme.basic['3']}`,
  display: 'flex',
  flexDirection: 'column',
  minWidth: '250px',
  height: '100vh',
  justifyContent: 'space-between',
})

const DefaultProfile = () => {
  const { logOut, user } = useAuthorization();
  return (
    <NavProfile
      control={
        <Link
          to="/login"
          onClick={logOut} >
          <LogOut />
        </Link >
      }
    >
      <div>{user.name}</div>
      <div css={{
        fontSize: sc.fontSize.xs,
        color: sc.fontColors.faded
      }}>{user.login}</div>
    </NavProfile>
  )
}

type Props = {
  children: ReactNode,
  profile?: ReactNode
}

const Nav = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const itemValues = [
    { name: "Products", link: "/products" },
    { name: "History", link: "/history" }
  ];

  const locals1 = {
    Link: ({ item, style }: { item: typeof itemValues[1], style: SerializedStyles }) =>
      <Link
        to={item.link}>
        <Changeable
          child={
            <SelectableItem
              css={style}>
              {item.name}
            </SelectableItem>
          }
          action={() => setActive(item.link)}
          newStyle={style} />
      </Link>
  }

  return (
    <Template>
      <div>
        {
          itemValues.map(item => {
            const style = item.name === active
              ? styles.selectableItem.active
              : styles.selectableItem.static
            return (
              <locals1.Link
                key={item.name}
                style={style}
                item={item} />
            )
          })
        }
      </div>
      <DefaultProfile />
    </Template>
  )
}
export { Nav }