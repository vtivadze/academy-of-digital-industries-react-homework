import { useState, useEffect } from "react";

export const useFetch = (initialMethod, initialUrl, initialOptions) => {
  const [method, setMethod] = useState(initialMethod);
  const [url, setUrl] = useState(initialUrl);
  const [options, setOptions] = useState(initialOptions);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    setError(undefined);

    // const controller = new AbortController();

    const fetchData = async () => {
      try {
        let response = null;
        if (method === "GET") {
          response = await fetch(url);
        } else if (method === "POST") {
          response = await fetch(url, options);
        }

        const result = await response.json();

        if (mounted) {
          setData(result);
        }
      }
      catch(error) {
        console.log(error);
        if (mounted) {
          setError(error);
        }
      }
      finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    // fetch clean up function
    return () => {
      console.log("CLEAN USE FETCH");
      // controller.abort();
      mounted = false;
    }

  }, [method, url, options]);

  return {data, error, loading, setMethod, setUrl, setOptions};
};