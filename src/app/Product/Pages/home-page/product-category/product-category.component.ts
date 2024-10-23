import { Component } from '@angular/core';
import { ProductService } from '../../../../Services/product-service.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css',
})
export class ProductCategoryComponent {
  productList: any[] = [];
  ballastProducts: any[] = [];
  toolsProducts: any[] = [];
  isLoading = true;
  openProductDetail: any;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadCategoryProducts();
  }

  loadCategoryProducts() {
    this.productService.fetchAllProducts().subscribe({
      next: (products) => {
        this.productList = products;
        this.ballastProducts = this.productList.filter(
          (product) => product.category === 'plumbing'
        );
        this.toolsProducts = this.productList.filter(
          (product) => product.category === 'building'
        );
        this.isLoading = false; // Stop loading spinner once data is fetched
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false; // Stop loading spinner on error
      },
    });
  }
}
