export default class {
  constructor(id, name, image_uri) {
    this.id = id;
    this.name = name;
    this.price = Number.MAX_SAFE_INTEGER;
    this.image_uri = image_uri;
    this.products = [];
  }

  push(product) {
    this.price = Math.min(this.price, product.price);
    this.products.push(product);
  }
  get ammount() {
    return this.products.length;
  }
  getPriceStringFormat() {
    if (this.price.toString().indexOf('.') === -1) {
      return this.price + '.00';
    }

    return this.price.toString().padEnd(4, 0);
  }
  toString() {
    return (
      this.id +
      '-' +
      this.name +
      ' (' +
      this.getPriceStringFormat() +
      ' R$) ' +
      this.ammount +
      ' produtos'
    );
  }
}
