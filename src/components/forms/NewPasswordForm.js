import { PasswordInput } from "../../atoms/PasswordInput";
import { PasswordRepeatInput } from "../../atoms/PasswordRepeatInput";

export const NewPasswordForm = (props) => {
  const onSubmit = event => event.preventDefault();

  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={ onSubmit }
    >
      <div className="field">
        <PasswordInput />
      </div>

      <div className="field">
        <PasswordRepeatInput />
      </div>

      <div className="field">
        <p className="control">
          <button className="button is-success">Set new password</button>
        </p>
      </div>
    </form>
  );
};
