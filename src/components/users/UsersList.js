import PropTypes from 'prop-types';
import { User } from "./User";
import { User as UserModel } from "../../models";

export const UsersList = (props) => {
  return (
    props.data.map((item, index) => {
      return (
        <User item={ item } id={ index } key={ index } />
      );
    })
  );
};

UsersList.defaultProps = {
  data: [new UserModel(["Guest", "Guest", null])],
};

UsersList.propTypes = {
  data: PropTypes.arrayOf(UserModel).isRequired,
};