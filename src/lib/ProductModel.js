export default class {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category.id;
  }
  getPriceStringFormat() {
    if (this.price.toString().indexOf('.') === -1) {
      return this.price + '.00';
    }
    return this.price.toString().padEnd(4, 0);
  }
  toString() {
    return this.name + ' (' + this.getPriceStringFormat() + ' R$)';
  }
}
