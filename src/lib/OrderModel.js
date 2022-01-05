export default class {
  constructor(product) {
    this.product = product;
    this.quantity = 1;
  }
  increase() {
    this.quantity++;
  }
}
