export default class {
  constructor(id, name, price, image_uri, category_id, ammount) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image_uri = image_uri;
    this.category_id = category_id;
    this.ammount = ammount;
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
