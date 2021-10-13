import PropTypes from 'prop-types';
import { MenuItem } from '../../modules';
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
  items: [new MenuItem('item', '#', false, 'menu__item')],
};

List.propTypes = {
  items: PropTypes.array.isRequired,
}