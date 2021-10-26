import { MenuItem } from './menuItem.model';

export class MainMenuItem extends MenuItem {
  constructor(item) {
    super(item);
    this.className = 'main-menu__item';
  }
}
