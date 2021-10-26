import { useEffect, useState } from "react";
import { getUserList } from "../services/userServices";

export const withUserList = (Component) => {
  const WithUserList = (props) => {

    const [users, setUsers] = useState([]);
    const fetchUsers = async () => await getUserList();
    useEffect(() => {
      (async () => {
        setUsers(await fetchUsers());
      })();
    }, []);

    return <Component {...props} userList={users} />
  }
  return WithUserList;
};