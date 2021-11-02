import { DateInput, SelectInput, SearchInput } from '../../atoms';
import { ArticlePreviewList } from '../../components/ArticlePreviewList';
import { useLocalStorage, useNewsEverything } from '../../hooks';

export const NewsForm = () => {
  const [from, setFrom] = useLocalStorage('news:from', '');
  const [to, setTo] = useLocalStorage('news:to', '');
  const [q, setQ] = useLocalStorage('news:q', '');
  const [sortBy, setSortBy] = useLocalStorage('news:sortBy', 0);

  const sortByData = ['relevancy', 'popularity', 'publishedAt'];

  const { data, setNewsUrl } = useNewsEverything();

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
      setNewsUrl(options);
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
