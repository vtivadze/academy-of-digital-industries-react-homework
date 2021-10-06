import PropTypes from 'prop-types';

const Link = ({name, href}) => {
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

export default Link;

Link.defaultProps = {
    name: "Item",
    href: '#',
};

Link.propTypes = {
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}