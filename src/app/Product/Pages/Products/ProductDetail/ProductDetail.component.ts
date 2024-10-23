import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { ProductService } from '../../../../Services/product-service.service';
import { Product } from '../../../Model/model';

@Component({
  selector: 'app-view-product',
  templateUrl: './ProductDetail.component.html',
  styleUrls: ['./ProductDetail.component.css'],
})
export class ProductDetail implements OnInit {
  addToCart() {
    throw new Error('Method not implemented.');
  }
  product: Product | null = null;
  isLoading: boolean = true;
  errorMessage: string | null = null;
  quantity: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProductDetails();
  }

  loadProductDetails(): void {
    this.activeRoute.paramMap
      .pipe(
        switchMap((params) => {
          const productId = params.get('id');
          if (!productId) {
            this.errorMessage = 'Invalid product ID';
            this.isLoading = false;
            return null;
          } else {
            return this.productService
              .fetchAllProducts()
              .pipe(
                map((products) => products.find((p) => p.id === productId))
              );
          }
        })
      )
      .subscribe({
        next: (product) => {
          this.product = product;
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = 'Failed to load product details';
          this.isLoading = false;
        },
      });
  }

  // getOrderQuantity(): number {
  //   return this.quantity || 1;
  // }
}
