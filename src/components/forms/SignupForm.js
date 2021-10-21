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
        <UsernameInput iniputName="username" />
      </div>

      <div className="field">
        <EmailInput iniputName="email" />
      </div>

      <div className="field">
        <PasswordInput iniputName="password" />
      </div>
        
      <div className="field">
        <PasswordRepeatInput iniputName="passwordRepeat" />
      </div>

      <div className="field">
        <p className="control">
          <button className="button is-success">Sign up</button>
        </p>
      </div>
    </form>
  );
};
