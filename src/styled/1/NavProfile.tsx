import { ReactNode } from "react"
import styled from '@emotion/styled'
import { sc } from "@/global/styleConstants"

// Styles //

const template = {
  Self: styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...sc.paddingTemplates.h.s,
  }),
  Main: styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: sc.offsets.xs
  }),
  Avatar: styled.img({
    objectFit: 'cover'
  })
} as const

// Component //

type ProfileProps = {
  avatarUrl?: string,
  children?: ReactNode,
  control?: ReactNode,
}
const NavProfile = ({ avatarUrl, children, control }: ProfileProps) => {
  return (
    <template.Self>
      {avatarUrl && <template.Avatar src={avatarUrl} />}
      <template.Main>
        {children}
      </template.Main>
      {control}
    </template.Self>
  )
}

export { NavProfile, ProfileProps }