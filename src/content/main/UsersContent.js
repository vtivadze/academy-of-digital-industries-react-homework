import { users } from "../../api";
import { UsersList } from "../../components/users";

export const UsersContent = () => {
  return (
    <UsersList data={ users }/>
  );
};