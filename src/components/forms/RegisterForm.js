import { EmailInput, NameInput, PasswordInput, PasswordRepeatInput, UsernameInput } from "../../atoms";

export const RegisterForm = () => {
  const onSubmit = event => event.preventDefault();

  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={ onSubmit }
    >
      <h1 className="title has-text-centered">Register</h1>
      
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
