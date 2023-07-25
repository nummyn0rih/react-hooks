import React from 'react'
import { useHover } from "../hooks/useHover";

export default function DemoHover() {
  const { hovered, ref } = useHover()

  return (
    <div id='ref' ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи на меня мышку'}
    </div>
  )
}