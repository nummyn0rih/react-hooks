import React from 'react'
import { useViewportSize } from "../hooks/useViewportSize";

export default function DemoViewportSize() {
  const { height, width } = useViewportSize()

  return (
    <>
      Width: {width}, height: {height}
    </>
  )
}
