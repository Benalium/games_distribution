import { ReactElement } from "react"

type ElementWithStyle = ReactElement & { props: { style: any } }

export { ElementWithStyle }