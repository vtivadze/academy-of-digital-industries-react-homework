export const ForgotPasswordForm = (props) => {
  return (
    <form className="box column is-half is-offset-one-quarter mt-6">
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field tile is-justify-content-space-between">
        <p className="control">
          <button className="button is-success">
            Log in
          </button>
        </p>
        <p className="control">
          <button className="button is-ghost">
            Forgot password?
          </button>
        </p>
      </div>
    </form>
  );
};