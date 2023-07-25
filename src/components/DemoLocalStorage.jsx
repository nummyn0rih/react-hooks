import React from 'react'
import { useLocalStorage } from "../hooks/useLocalStorage";

const getValue = () => Math.ceil(Math.random() * 1000000000000);

export default function DemoLocalStorage() {
  const [token, { setItem, removeItem}] = useLocalStorage('token')

  return (
    <div>
      <p>Твой токен: { token }</p>
      <div>
        <button onClick={() => setItem(getValue())}>Задать токен</button>
        {' '}
        <button onClick={() => removeItem()}>Удалить токен</button>
      </div>
    </div>
  )
}
