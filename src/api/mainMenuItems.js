import { mainMenuItems as items} from "../data";
import { MainMenuItem } from "../modules";

export const mainMenuItems = items.map(item => new MainMenuItem(item));

