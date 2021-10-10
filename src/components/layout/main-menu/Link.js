import PropTypes from 'prop-types';

export const Link = ({name, href}) => {
  return (
    <a
      className="main-menu__item-link"
      href={href}
      title={name}
    >
      {name}
    </a>
  );
}

Link.defaultProps = {
  name: "Item",
  href: '#',
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}