import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (query = '') => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(url.concat(query));

    if (response.ok) {
      const data = await response.json();
      setData(data);
    } else {
      setData(null);
      setError(new Error('Что-то пошло не так!'));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  function refetch({ params }) {
    const entries = Object.entries(params);

    if (entries.length > 0) {
      const query = entries.reduce(
        (acc, [key, value]) => `${acc}?${key}=${value}`,
        ''
      );
      getData(query);
    }
  }

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}
