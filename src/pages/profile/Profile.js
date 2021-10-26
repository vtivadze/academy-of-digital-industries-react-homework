// import { useEffect } from 'react';
import { withUserList } from '../../hoc/withUserList';

const Profile = ({ parameter, userList }) => {
  return (
    <>
      <h1 className="title">Profile Page</h1>
      <p className="mb-5">{parameter}</p>
      <div className="columns is-flex-wrap-wrap">
        {userList.map(user => {
          return (
            <div className="column" key={user.id}>
              <div className="box">{user.email}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default withUserList(Profile);
