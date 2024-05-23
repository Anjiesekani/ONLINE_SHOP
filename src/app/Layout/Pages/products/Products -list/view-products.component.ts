import { Component } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css',
})
export class ViewProductsComponent {
  addToCart: number = 0;

  product = {
    inStock: 10,
  };

  decreamentCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
  increamentCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }
}
