import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../Services/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private productService: ProductService) {}

  router: Router = inject(Router);
  onSearchClicked(value: string) {
    this.router.navigate(['/landing'], { queryParams: { category: value } });
  }
}
