import { DateInput } from "../../atoms/DateInput/DateInput";

export const EverythingForm = () => {
  const onSubmit = event => event.preventDefault();

  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={onSubmit}>
      <h1 className="title has-text-centered">Everything</h1>

      <div className="field">
        <DateInput inputName="from" />
      </div>

      <div className="field tile is-justify-content-space-between">
        <p className="control">
          <button className="button is-success">Get News</button>
        </p>
      </div>
    </form>
  );
};