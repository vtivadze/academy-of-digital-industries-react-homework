import { users } from "../../api";
import { UsersList } from "../../components/users";

export const Users = () => {
  return (
    <div className="tile is-parent is-flex-wrap-wrap">
      <UsersList data={ users }/>
    </div>
  );
};