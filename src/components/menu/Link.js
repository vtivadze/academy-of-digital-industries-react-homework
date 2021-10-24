import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Link as LinkItem } from "../../models";

export const Link = (props) => {
  const {name, href, className} = props.link;

  return (
    <NavLink
      className={`${className}-link button is-size-4 is-block`}
      to={href}
      title={name}
    >
      {name}
    </NavLink>
  );
}

Link.defaultProps = {
  link: new LinkItem("item", "#", "menu__item"),
};

Link.propTypes = {
  link: PropTypes.instanceOf(LinkItem).isRequired,
}