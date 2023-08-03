import React from 'react'
import { useToggle } from '../hooks/useToggle'

const init = ['blue', 'orange', 'cyan', 'teal']

export default function DemoToggle() {
    const [value, toggle] = useToggle(init)
    const [value2, toggle2] = useToggle()

  return (
    <>
      <h2>useToggle(['blue', 'orange', 'cyan', 'teal'])</h2>
      <button onClick={() => toggle()}>{value}</button>
      <div>
        {init.map((el) => <button key={el} onClick={() => toggle(el)}>{el}</button>)}
      </div>

      <h2>useToggle()</h2>
      <button onClick={() => toggle2()}>{value2.toString()}</button>
      <div>
        {[true, false].map((el, i) => <button key={i} onClick={() => toggle2(el)}>{el.toString()}</button>)}
      </div>
    </>
  )
}
