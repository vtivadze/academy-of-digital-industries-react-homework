export const SecureComponent = ({ children }) => {
  const loggedIn = false;

  return loggedIn ? children : '';
};