import PropTypes from "prop-types";
import { MenuItem } from "../../models";
import { Item } from "./Item";

export const List = props => {
  return (
    props.items.map((item, index) => {
      return (
        <Item
          item={item}
          handleClick={props.handleClick}
          index={index}
          key={`${index}-${item.name}`}
        />
      );
    })
  );
}

List.defaultProps = {
  items: [new MenuItem("item", "#", false)],
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    })
  ).isRequired,
}