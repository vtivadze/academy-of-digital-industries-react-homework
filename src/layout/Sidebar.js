import { SidebarMenu } from ".";

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
