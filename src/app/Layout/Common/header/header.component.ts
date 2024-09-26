import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router: Router = inject(Router);
  onSearchClicked(value: string) {
    this.router.navigate(['/landing'], { queryParams: { category: value } });
  }
}
