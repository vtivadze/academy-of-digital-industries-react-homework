import { User } from "./User";

export const UsersList = (props) => {
  return (
    props.data.map((item, index) => <User item={ item } key={ index } />)
  );
};