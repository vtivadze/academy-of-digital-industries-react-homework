import { SidebarMenu } from ".";

export const Sidebar = props => {
  return (
    <aside className="app-sidebar">
      <SidebarMenu
        items={props.sidebarMenuItems}
        handleClick={props.handleClick}
      />
    </aside>
  );
}
