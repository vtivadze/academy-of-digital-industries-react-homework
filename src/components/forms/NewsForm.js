import { DateInput, SelectInput, SearchInput } from '../../atoms';
import { useFetch } from "../../hooks";
import { generateGetUrl } from '../../helpers';

export const NewsForm = () => {
  const sortByData = ['relevancy', 'popularity', 'publishedAt'];

  const apiUrl = process.env.REACT_APP_NEWS_API_URL;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const url = `${apiUrl}?apiKey=${apiKey}`;

  const initialOptions = {q: "business"};
  const initialUrl = generateGetUrl(url, initialOptions);

  const { data, setUrl } = useFetch("GET", initialUrl);

  const onSubmit = event => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const options = {};

    for (let [key, value] of fd.entries()) {
      if (value) {
        options[key] = value;
      }
    }

    if (options) {
      const newUrl = generateGetUrl(url, options);
      setUrl(newUrl);
    }

  };

  return (
    <div className="box column is-10 is-offset-1 mt-6">
      <h1 className="title has-text-centered">All the News</h1>
      <form onSubmit={onSubmit}>
        <div className="columns">
          <div className=" column field is-horizontal">
            <label className="label mr-3">From</label>
            <DateInput inputName="from" />
          </div>

          <div className="column field is-horizontal">
            <label className="label mr-3">To</label>
            <DateInput inputName="to" />
          </div>
        </div>

        <div className="columns">
          <div className="column field is-horizontal">
            <label className="label mr-3">Keyword</label>
            <SearchInput
              inputName="q"
            />
          </div>

          <div className="column field is-horizontal">
            <label className="label mr-3">Sort By</label>
            <SelectInput inputName="sortBy" options={['', ...sortByData]} />
          </div>
        </div>

        <div className="field tile is-justify-content-space-between">
          <p className="control">
            <button className="button is-success">Get News</button>
          </p>
        </div>
      </form>

      {data && data.status === "ok" && data.articles.forEach(article => {
        console.log(article);
      })}
    </div>
  );
};
