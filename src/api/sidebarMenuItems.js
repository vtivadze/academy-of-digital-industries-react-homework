import { sidebarMenuItems as items} from "../data";
import { SidebarMenuItem } from "../modules";

export const sidebarMenuItems = items.map(item => new SidebarMenuItem(item));