import PropTypes from "prop-types";
import React from "react";
import { List } from "../components/menu";
import { SidebarMenuItem } from "../models";

export const SidebarMenu = props =>  {
  const items = props.items;
  
  return (
    <div className="sidebar-menu">
      <ul className="sidebar-menu__container">
        <List
          items={ items }
          handleClick={ props.handleClick }
        />
      </ul>
    </div>
  );
}

SidebarMenu.defaultProps = {
  items: [new SidebarMenuItem(["Counter", "#", "sidebar-menu__item"])],
};

SidebarMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    })
  ).isRequired,
};
