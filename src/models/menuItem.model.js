export class MenuItem {
  constructor([name = "item", href = "#", isActive = false]) {
    this.name = name;
    this.href = href;
    this.isActive = isActive;
    this.className = "menu__item";
  }
}