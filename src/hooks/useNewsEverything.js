import { useFetch } from "./useFetch";
import { generateGetUrl } from "../helpers";

export const useNewsEverything = () => {
  const apiUrl = process.env.REACT_APP_NEWS_API_URL;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const url = `${apiUrl}?apiKey=${apiKey}`;

  const initialOptions = {
    q: 'React',
  };
  const initialUrl = generateGetUrl(url, initialOptions);

  const { data, setUrl } = useFetch(initialUrl);

  const setNewsUrl = (options) => {
    const newUrl = generateGetUrl(url, options);
    setUrl(newUrl);
  };

  return { data, setNewsUrl };
};