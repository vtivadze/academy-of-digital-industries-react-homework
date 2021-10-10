import { Link } from ".";

export const Item = ({name, href, isActive}) => {
  let className = "main-menu__item";
  className += isActive
    ? " main-menu__item--active"
    : "";

  return (
    <li className={className}>
      <Link name={name} href={href} />
    </li>
  );
}


Item.defaultProps = {
  isActive: false,
}