import { EmailInput } from "../../atoms/EmailInput";
import { NameInput } from "../../atoms/NameInput";
import { PasswordInput } from "../../atoms/PasswordInput";
import { PasswordRepeatInput } from "../../atoms/PasswordRepeatInput";
import { UsernameInput } from "../../atoms/UsernameInput";

export const SignupForm = () => {
  const onSubmit = event => event.preventDefault();

  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={ onSubmit }
    >
      <div className="field">
        <NameInput inputName="name" />
      </div>

      <div className="field">
        <UsernameInput name="username" />
      </div>

      <div className="field">
        <EmailInput name="email" />
      </div>

      <div className="field">
        <PasswordInput name="password" />
      </div>
        
      <div className="field">
        <PasswordRepeatInput name="passwordRepeat" />
      </div>

      <div className="field">
        <p className="control">
          <button className="button is-success">Sign up</button>
        </p>
      </div>
    </form>
  );
};
