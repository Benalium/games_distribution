import { cloneElement, ComponentType, ReactElement, ReactNode, useState } from "react"
import { useEffect } from "react";
import { useCallback } from "react";
import { WindowProps } from "./Window";
type WindowTriggerProps = {
  trigger: ReactElement<{ onClick: (e: MouseEvent) => void }>
  window: ReactElement<{ onClose: () => void }>
}
const WindowTrigger = ({ trigger, window }: WindowTriggerProps) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false)
  const enhancedTrigger = cloneElement(trigger, {
    onClick: (e) => {
      console.log('So cold!')
      setIsWindowOpen(true);
      trigger.props.onClick && trigger.props.onClick(e)
      e.preventDefault();
      e.stopPropagation();
    }
  });
  window = cloneElement(window, { onClose: () => setIsWindowOpen(false) })
  return (
    <>
      {enhancedTrigger}
      {
        isWindowOpen &&
        window
      }
    </>
  )
}

export { WindowTrigger }