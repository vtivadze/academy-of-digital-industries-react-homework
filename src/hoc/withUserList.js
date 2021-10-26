import { useEffect } from "react";
import { getUserList } from "../services/userServices";

export const withUserList = (Component) => {
  const WithUserList = (props) => {

    useEffect(() => {
      getUserList();
    }, []);

    return <Component {...props} userList={{}} />
  }
  return WithUserList;
};