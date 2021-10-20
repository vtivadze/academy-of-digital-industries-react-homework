import PropTypes from "prop-types";
import { SidebarMenu } from ".";
import { SidebarMenuItem } from "../models";

export const Sidebar = props => {

  return (
    <aside className="app-sidebar column is-2 is-justify-content-center  p-3">
      <SidebarMenu
        items={props.sidebarMenuItems}
        handleClick={props.handleClick}
      />
    </aside>
  );
}

Sidebar.defaultProps = {
  sidebarMenuItems: [new SidebarMenuItem(["item", "#", false, "sidebar-menu__item"])],
};

Sidebar.propTypes = {
  Sidebar: PropTypes.arrayOf(SidebarMenuItem).isRequired,
};
