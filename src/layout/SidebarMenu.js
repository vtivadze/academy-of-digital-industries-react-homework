import React from 'react';
import { memo } from 'react';
import { List } from '../components/menu';
import { sidebarMenuItems } from '../api';

export const SidebarMenu = memo(() => {
  const items = sidebarMenuItems;

  return (
    <div className="sidebar-menu">
      <ul className="sidebar-menu__container">
        <List items={items} />
      </ul>
    </div>
  );
});
