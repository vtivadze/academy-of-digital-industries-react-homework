import { useEffect } from "react";

export const withUserList = (Component) => {
  const withUserList = (props) => {

    // useEffect(() => {

    // }, []);

    return <Component {...props} userList={{}} />
  }
  return withUserList;
};