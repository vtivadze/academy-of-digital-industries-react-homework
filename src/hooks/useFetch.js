import { useState, useEffect } from "react";

export const useFetch = (initialUrl, initialOptions) => {
  const [url, setUrl] = useState(initialUrl);
  const [options, setOptions] = useState(initialUrl);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    setError(undefined);

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, {...options, signal: controller});
        const result = await response.json();

        if (mounted) {
          setData(result);
        }
      }
      catch(error) {
        if (mounted) {
          setError(error);
        }
      }
      finally {
        setTimeout(() => {
          if (mounted) {
            setLoading(false);
          }
        }, 2000);
      }
    }

    fetchData();

    // fetch clean up function
    return () => {
      console.log("CLEAN USE FETCH");
      controller.abort();
      mounted = false;
    }

  }, [url, options]);

  return {data, error, loading, setUrl, setOptions};
};