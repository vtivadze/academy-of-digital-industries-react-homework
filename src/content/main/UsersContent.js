import { users } from "../../api";
import { UsersList } from "../../components/users";

export const UsersContent = () => {
  return (
    <div className="tile is-parent is-flex-wrap-wrap">
      <UsersList data={ users }/>
    </div>
  );
};