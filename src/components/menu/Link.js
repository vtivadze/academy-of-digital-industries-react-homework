import PropTypes from 'prop-types';
import { Link as LinkItem } from "../../modules";

export const Link = (props) => {
  const {name, href, className} = props.link;

  return (
    <a
      className={`${className}-link`}
      href={href}
      title={name}
    >
      {name}
    </a>
  );
}

Link.defaultProps = {
  link: new LinkItem('item', '#', 'menu__item'),
};

Link.propTypes = {
  link: PropTypes.instanceOf(LinkItem).isRequired,
}