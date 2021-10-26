import { users } from '../../api';
import { UsersList } from '../../components/users';

export const Users = () => {
  return (
    <>
      <h1 className="title">Users</h1>
      <div className="tile is-parent is-flex-wrap-wrap">
        <UsersList data={users} />
      </div>
    </>
  );
};
