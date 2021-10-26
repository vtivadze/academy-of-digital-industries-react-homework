import { mainMenuItems as items } from '../data';
import { MainMenuItem } from '../models';

export const mainMenuItems = items.map(item => new MainMenuItem(item));
