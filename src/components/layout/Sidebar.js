import { SidebarMenu } from ".";

export const Sidebar = props => {
  return (
    <aside className="app-sidebar tile is-justify-content-center is-2 p-3">
      <SidebarMenu
        items={props.sidebarMenuItems}
        handleClick={props.handleClick}
      />
    </aside>
  );
}
