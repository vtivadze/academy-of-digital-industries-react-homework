export function SidebarMenu() {
  return (
    <div className="sidebar-menu">
      <ul className="sidebar-menu__container">
        <li className="sidebar-menu__item sidebar-menu__item--active">
          <a className="sidebar-menu__item-link" href="#">Item 1</a>
        </li>
        <li className="sidebar-menu__item">
          <a className="sidebar-menu__item-link" href="#">Item 2</a>
        </li>
        <li className="sidebar-menu__item">
          <a className="sidebar-menu__item-link" href="#">Item 3</a>
        </li>
        <li className="sidebar-menu__item">
          <a className="sidebar-menu__item-link" href="#">Item 4</a>
        </li>
        <li className="sidebar-menu__item">
          <a className="sidebar-menu__item-link" href="#">Item 5</a>
        </li>
      </ul>
    </div>
  );
}
