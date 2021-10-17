import { User } from "./User";

export const UsersList = (props) => {
  return (
    props.data.map((item, index) => {
      return (
        <User item={ item } id={ index } key={ index } />
      );
    })
  );
};