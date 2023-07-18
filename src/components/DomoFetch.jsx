import React from 'react'
import { useFetch } from '../hooks/useFetch'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export default function DomoFetch() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch(URL)

  return (
    <div>
      <div>
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && `Произошла ошибка: ${error.message}`}
      {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>)}
    </div>
  )
}
