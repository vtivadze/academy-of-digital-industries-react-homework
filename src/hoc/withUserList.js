export const withUserList = (Component) => {
  const withUserList = (props) => {
    return <Component {...props} userList={{}} />
  }
  return withUserList;
};