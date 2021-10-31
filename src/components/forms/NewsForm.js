import { DateInput, SelectInput, SearchInput } from '../../atoms';

export const NewsForm = () => {
  const sortByData = ['relevancy', 'popularity', 'publishedAt'];

  const onSubmit = event => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const formData = {};

    for (let [key, value] of fd.entries()) {
      formData[key] = value;
    }

    const apiUrl = process.env.REACT_APP_NEWS_API_URL;
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const queryData = Object.entries(formData).reduce((r, [key, value]) => {
      return (r += value ? `${key}=${value}&` : '');
    }, '');

    const url = `${apiUrl}?${queryData}apiKey=${apiKey}`;
    console.log(url);

    // const url = `${apiUrl}?` + everythingData.entries.f

    // fetch(`${process.env.REACT_APP_API_URL}/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify(everythingData),
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.token) {

    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="box column is-10 is-offset-1 mt-6">
      <h1 className="title has-text-centered">Everything</h1>
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
    </div>
  );
};
