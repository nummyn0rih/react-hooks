import { useWindowScroll } from "../hooks/useWindowScroll"
import DemoFetch from './DomoFetch';

import React from 'react'

export default function DemoWindowScroll() {
  const [scroll, scrollTo] = useWindowScroll()
  return (
    <div id="scroller">
      <p className="posFix">
      Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button className="posFix" onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
      <DemoFetch />
    </div>
  )
}
