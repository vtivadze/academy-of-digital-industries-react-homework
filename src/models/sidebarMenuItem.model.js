import { MenuItem } from "./menuItem.model";

export class SidebarMenuItem extends MenuItem {
  constructor(item) {
    super(item);
    this.className = "sidebar-menu__item";
  }
}