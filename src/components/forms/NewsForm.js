import { DateInput, SelectInput, SearchInput } from '../../atoms';
import { useFetch } from '../../hooks';
import { generateGetUrl } from '../../helpers';
import { ArticlePreviewList } from '../../components/ArticlePreviewList';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const NewsForm = () => {
  const [from, setFrom] = useLocalStorage('news:from', '');
  const [to, setTo] = useLocalStorage('news:to', '');
  const [q, setQ] = useLocalStorage('news:q', '');
  const [sortBy, setSortBy] = useLocalStorage('news:sortBy', 0);

  const sortByData = ['relevancy', 'popularity', 'publishedAt'];

  const apiUrl = process.env.REACT_APP_NEWS_API_URL;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const url = `${apiUrl}?apiKey=${apiKey}`;

  const initialOptions = { q: 'React' };
  const initialUrl = generateGetUrl(url, initialOptions);

  const { data, setUrl } = useFetch(initialUrl);

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
      <form onSubmit={onSubmit} className="mb-6">
        <div className="columns">
          <div className=" column field is-horizontal">
            <label className="label mr-3">From</label>
            <DateInput
              inputName="from"
              value={from}
              updateLocalStorage={setFrom}
            />
          </div>

          <div className="column field is-horizontal">
            <label className="label mr-3">To</label>
            <DateInput inputName="to" value={to} updateLocalStorage={setTo} />
          </div>
        </div>

        <div className="columns">
          <div className="column field is-horizontal">
            <label className="label mr-3">Keyword</label>
            <SearchInput inputName="q" value={q} updateLocalStorage={setQ} />
          </div>

          <div className="column field is-horizontal">
            <label className="label mr-3">Sort By</label>
            <SelectInput
              inputName="sortBy"
              options={['', ...sortByData]}
              selectedItem={sortBy}
              updateLocalStorage={setSortBy}
            />
          </div>
        </div>

        <div className="field tile is-justify-content-space-between">
          <p className="control">
            <button className="button is-success">Get News</button>
          </p>
        </div>
      </form>

      {data && data.status === 'ok' && (
        <ArticlePreviewList articles={data.articles} />
      )}
    </div>
  );
};
