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
        <NameInput />
      </div>

      <div className="field">
        <UsernameInput />
      </div>

      <div className="field">
        <EmailInput />
      </div>

      <div className="field">
        <PasswordInput />
      </div>
        
      <div className="field">
        <PasswordRepeatInput />
      </div>

      <div className="field">
        <p className="control">
          <button className="button is-success">Sign up</button>
        </p>
      </div>
    </form>
  );
};
