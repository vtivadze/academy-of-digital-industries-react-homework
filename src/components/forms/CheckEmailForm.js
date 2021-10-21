import { EmailInput } from "../../atoms/EmailInput";

export const CheckEmailForm = () => {
  const onSubmit = event => event.preventDefault();
  
  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={ onSubmit }
    >
      <div className="field">
        <EmailInput name="email" />
      </div>

      <div className="field tile is-justify-content-space-between">
        <p className="control">
          <button className="button is-success">Check Email</button>
        </p>
      </div>
    </form>
  );
};
