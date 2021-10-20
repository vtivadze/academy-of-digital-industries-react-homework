import { sidebarMenuItems as items} from "../data";
import { SidebarMenuItem } from "../models";

export const sidebarMenuItems = items.map(item => new SidebarMenuItem(item));