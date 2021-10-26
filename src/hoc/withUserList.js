import { useEffect } from "react";
import { getUserList } from "../services/userServices";

export const withUserList = (Component) => {
  const WithUserList = (props) => {
    
    const fetchUsers = async () => {
      const data = await getUserList();
      console.log(data);
    };

    useEffect(() => {
      (async () => {
        fetchUsers();
      })();
    }, []);

    return <Component {...props} userList={{}} />
  }
  return WithUserList;
};