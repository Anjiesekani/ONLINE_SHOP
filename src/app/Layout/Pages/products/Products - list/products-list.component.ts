import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../Services/product-service.service';
import { Product } from '../../../../Model/model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products/../products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  constructor(private productservice: ProductService) {}
  productList: Product[] = [];

  ngOnInit(): void {
    // this.productservice.getAllProducts().subscribe({
    //   next: (data: Product[]) => {
    //     this.productList = data;
    //     console.log(this.productList);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching products', error);
    //   },
    // });
  }
}
