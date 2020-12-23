class BuyButton extends HTMLElement {
  connectedCallback() {
    this.render();
    this.firstChild.addEventListener("click", this.addToCart);
  }
  addToCart() {
    this.dispatchEvent(
      new CustomEvent("basket:changed", {
        bubbles: true,
      })
    );
  }
}

class ShoppingCart extends HTMLElement {
  connectedCallback() {
    window.addEventListener("blue:basket:changed", this.updateData);
  }
  updateData() {
    // refresh contents of shopping cart
  }
}
