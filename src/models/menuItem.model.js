export class MenuItem {
  constructor([name = "item", href = "#"]) {
    this.name = name;
    this.href = href;
    this.className = "menu__item";
  }
}