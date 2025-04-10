import { FormEvent, ReactNode } from "react"
import { Input } from "@/styled/1/Input"
import { css, SerializedStyles } from "@emotion/react"
import { sc } from "@/global/styleConstants"
import styled from '@emotion/styled'


const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: sc.offsets.l
})

export { Form }
