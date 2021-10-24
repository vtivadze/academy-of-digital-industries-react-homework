import PropTypes from "prop-types";
import { Link as ItemLink, MenuItem } from "../../models";
import { Link } from "./Link";

export const Item = props => {
  const { item: {name, href, isActive, className}, handleClick, index } = props;
  const link = new ItemLink(name, href, className);
  
  // const classes = (() => {
  //   return isActive
  //     ? `${className} ${className}--active`
  //     : className;
  // })();

  return (
    
    <li
      className={`${className} m-3`}
      onClick={ handleClick.bind(null, index, className) }
    >
      <Link link={ link } />
    </li>
  );
}

Item.defaultProps = {
  item: new MenuItem(["item", "#", false]),
};

Item.propTypes = {
  item: PropTypes.instanceOf (MenuItem).isRequired,
};