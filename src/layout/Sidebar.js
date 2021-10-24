import PropTypes from "prop-types";
import { SidebarMenu } from ".";
import { SidebarMenuItem } from "../models";

export const Sidebar = props => {

  return (
    <aside className="app-sidebar column is-2 is-justify-content-center  p-3">
      <SidebarMenu items={props.sidebarMenuItems} />
    </aside>
  );
}

Sidebar.defaultProps = {
  sidebarMenuItems: [new SidebarMenuItem(["item", "#", "sidebar-menu__item"])],
};

Sidebar.propTypes = {
  sidebarMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    })
  ).isRequired,
};
