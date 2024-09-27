import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../Services/product-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Make sure it's `styleUrls` not `styleUrl`
})
export class HomeComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}
  productList: Product[] = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;
  searchItem: string;

  ngOnInit(): void {
    this.handleProductSearch();
    this.productService.errorSubject.subscribe({
      next: (error) => {
        this.setErrorMessage(error);
      },
    });
  }

  handleProductSearch(): void {
    this.isLoading = true; // Set to true when data fetching starts
    this.activeRoute.queryParamMap.subscribe((value) => {
      this.searchItem = value.get('category');

      if (!this.searchItem) {
        // No search category, fetch all products
        this.productService.fetchAllProducts().subscribe({
          next: (products) => {
            console.log(products);

            this.productList = products;
            this.isLoading = false; // Set to false after data is loaded
            console.log(this.productList);
          },
          error: (error) => {
            this.isLoading = false; // Set to false in case of an error
            this.setErrorMessage(error);
          },
        });
      } else {
        // Filter products based on the search category
        this.isLoading = true;
        this.productService.fetchAllProducts().subscribe({
          next: (products) => {
            this.productList = products.filter(
              (product) =>
                product.details &&
                product.details.category &&
                product.details.category
                  .toLowerCase()
                  .includes(this.searchItem.toLowerCase())
            );
            this.isLoading = false; // Set to false after filtering is done
          },
          error: (error) => {
            this.isLoading = false; // Set to false in case of an error
            this.setErrorMessage(error);
          },
        });
      }
    });
  }

  private setErrorMessage(err: HttpErrorResponse) {
    if (err.error.error === 'Permission denied') {
      this.errorMessage = 'you dont have permission to perform this action';
    } else {
      this.errorMessage = err.message;
    }
    this.snackBar.open(this.errorMessage, 'Close', {
      duration: 4000,
      panelClass: ['error-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  deleteProduct(ID: string) {
    this.productService.DeleteProduct(ID).subscribe((resp) => {
      this.handleProductSearch();
    });
  }

  editProduct(product: Product) {
    this.route.navigate(['/notify'], {
      queryParams: {
        id: product.id,
        name: product.productName,
        description: product.description || '',
        image: product.image,
        category: product.details.category || 'building',
        price: product.details.price || '300-500',
      },
    });
  }
}
