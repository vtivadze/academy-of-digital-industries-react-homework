import { useEffect } from "react";
import { getUserList } from "../services/userServices";

export const withUserList = (Component) => {
  const WithUserList = (props) => {

    useEffect(() => {
      (async () => {
        const data = getUserList();
        console.log(data);
      })();
    }, []);

    return <Component {...props} userList={{}} />
  }
  return WithUserList;
};