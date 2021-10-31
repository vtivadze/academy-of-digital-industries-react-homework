import { DateInput } from "../../atoms";
import { SelectInput } from "../../atoms/SelectInput/SelectInput";

export const EverythingForm = () => {
  const onSubmit = event => event.preventDefault();

  return (
    <div className="box column is-10 is-offset-1 mt-6">
      <h1 className="title has-text-centered">Everything</h1>
      <form onSubmit={onSubmit}>
        <div className="columns">
          <div className=" column field is-horizontal">
            <label class="label mr-3">From</label>
            <DateInput inputName="from" />
          </div>

          <div className="column field is-horizontal">
            <label class="label mr-3">To</label>
            <DateInput inputName="to" />
          </div>

          <div className="column field is-horizontal">
            <label class="label mr-3">Sort By</label>
            <SelectInput options={["", "relevancy", "popularity", "publishedAt"]} />
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