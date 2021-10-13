import PropTypes from 'prop-types';
import { Link as ItemLink, MenuItem } from "../../modules";
import { Link } from "./Link";

export const Item = props => {
  const { item: {name, href, isActive, className}, handleClick, index } = props;
  const link = new ItemLink(name, href, className);
  
  const getClasses = () => {
    return isActive
      ? `${className} ${className}--active`
      : className;
  }

  return (
    <li
      className={ getClasses() }
      onClick={ handleClick.bind(null, index) }
    >
      <Link link={ link } />
    </li>
  );
}

Item.defaultProps = {
  item: new MenuItem('item', '#', false, 'menu__item'),
};

Item.propTypes = {
  item: PropTypes.instanceOf(MenuItem).isRequired,
};