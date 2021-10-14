import React from "react";
import { List } from "../components/menu";

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
