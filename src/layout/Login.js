export const Login = (props) => {
  const clickHandler = (itemName) => {
    return props.customButtonClickHandler(itemName);
  }

  return (
    <div className="buttons is-flex-direction-column-reverse mb-0">
      <button
        className="button is-primary mr-0 mb-0"
        onClick={clickHandler.bind(null, "SignupForm")}
      >
        <strong>Sign up</strong>
      </button>
      <button
        className="button is-light is-align-self-stretch mr-0"
        onClick={clickHandler.bind(null, "LoginForm")}
      >
        Log in
      </button>
    </div>
  );
};