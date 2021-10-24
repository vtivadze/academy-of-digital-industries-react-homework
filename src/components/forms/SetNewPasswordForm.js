import { PasswordInput } from "../../atoms/PasswordInput";
import { PasswordRepeatInput } from "../../atoms/PasswordRepeatInput";

export const SetNewPasswordForm = () => {
  const onSubmit = event => event.preventDefault();

  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={ onSubmit }
    >
      <h1 className="title has-text-centered">Set New Password</h1>
      
      <div className="field">
        <PasswordInput inputName="password" />
      </div>

      <div className="field">
        <PasswordRepeatInput inputName="passwordRepeat" />
      </div>

      <div className="field">
        <p className="control">
          <button className="button is-success">Set new password</button>
        </p>
      </div>
    </form>
  );
};
