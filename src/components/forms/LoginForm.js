import { EmailInput } from "../../atoms/EmailInput/EmailInput";
import { PasswordInput } from "../../atoms/PasswordInput/PasswordInput";

export const LoginForm = () => {
  const onSubmit = event => {
    event.preventDefault();

    const loginData = {};
    const fd = new FormData(event.target);

    for (let [key, value] of fd.entries()) {
      loginData[key] = value;
    }

    console.log(loginData);
    // const loginData = {
    //   email, password
    // };
  }

  return (
    <form
      className="box column is-half is-offset-one-quarter mt-6"
      onSubmit={onSubmit}  
    >
      <div className="field">
        <EmailInput />
      </div>

      <div className="field">
        <PasswordInput />
      </div>

      <div className="field tile is-justify-content-space-between">
        <p className="control">
          <button className="button is-success">Log in</button>
        </p>
        <p className="control">
          <button className="button is-ghost">Forgot password?</button>
        </p>
      </div>
    </form>
  );
};
