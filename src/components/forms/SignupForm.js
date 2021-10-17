export const SignupForm = (props) => {
  return (
    <form className="box column is-half is-offset-one-quarter mt-6">
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Firstname LastName" />
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="User name" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        {/* <p className="help is-success">This username is available</p> */}
      </div>

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

      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Repeat password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>

      <div className="field">
        <p className="control">
          <button className="button is-success">
            Sign up
          </button>
        </p>
      </div>
    </form>
  );
};