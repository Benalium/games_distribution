import { sc } from "@/global/styleConstants"
import { css } from "@emotion/react"
import { MouseEventHandler, ReactNode, useState } from "react"
import styled from '@emotion/styled'
import { createPortal } from "react-dom";

const template = {
  Self: styled.div({
    backgroundColor: sc.theme.basic[1],
    position: 'fixed',
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999'
  }),
  Close: styled.div({
    width: 'fit-content',
    height: 'fit-content'
  })
}

type Props = {
  children?: ReactNode,
  onClose?: () => void
}

const Window = ({ children, onClose }: Props) => {
  return createPortal(
    <template.Self onClick={e => e.stopPropagation()}>
      <template.Close onClick={() => { if (!onClose) return; onClose(); }}>
        X
      </template.Close>
      {children}
    </template.Self>,
    document.body
  )
}

export { Window, Props as WindowProps }
