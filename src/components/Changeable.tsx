import { sc } from '@/global/styleConstants';
import { css, SerializedStyles } from '@emotion/react';
import { cloneElement, FC, ReactElement, ReactNode } from 'react';
import { MouseEvent } from 'react';
import { ElementWithStyle } from '@/global/ElementWithStyles';

type Props<Element extends ElementWithStyle> = {
  action: (e?: MouseEvent) => void,
  child: Element & { props: { css: SerializedStyles } },
  newStyle?: Element['props']['style']
}

function Changeable<Element extends ElementWithStyle>({ action, child, newStyle: style }: Props<Element>) {
  const newChild = cloneElement(child, style !== undefined
    ? { ...child.props, css: style }
    : child.props)
  return (
    <div onClick={(e) => action(e)} >
      {newChild}
    </div>
  )
}

export { Changeable }