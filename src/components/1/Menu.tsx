import { sc } from "@/global/styleConstants";
import { css } from "@emotion/react";
import { Children, cloneElement, Dispatch, isValidElement, ReactElement, SetStateAction, useState } from "react"
import { ReactNode } from "react";
import styled from '@emotion/styled'

const template = {
  Self: styled.div({
    position: 'relative'
  }),
  Menu: styled.div<{ isOpened: boolean }>((props) => ({
    position: 'absolute',
    top: '100%',
    right: '0',
    backgroundColor: sc.theme.basic[1],
    minWidth: '150px',
    ...sc.borderRadiusTemplates.m,
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    zIndex: 10,
    display: props.isOpened ? 'block' : 'none',
  }))
}

type MenuProps = {
  children: ReactNode,
  icon: ReactNode
}

const Menu = ({ children, icon }: MenuProps) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <template.Self>
      <div onClick={(e) => {
        e.preventDefault();
        setIsOpened(!isOpened);
      }}>
        {icon}
      </div>
      <template.Menu isOpened={isOpened}>
        {
          Children.map(children, child => {
            if (!isValidElement<{ onClick: () => void }>(child)) {
              return
            }
            return cloneElement(
              child,
              {
                onClick: () => {
                  setIsOpened(!isOpened)
                }
              }
            )
          })
        }
      </template.Menu>
    </template.Self>
  )
}

export { Menu }