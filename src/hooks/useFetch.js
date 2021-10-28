import { useState, useEffect } from "react";

export const useFetch = (initialUrl, initialOptions) => {
  const [url, setUrl] = useState(initialUrl);
  const [options, setOptions] = useState(initialUrl);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      }
      catch(error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      console.log("CLEAN USE FETCH");
    }

  }, [url, options]);

  return {data, error, loading, setUrl, setOptions};
};