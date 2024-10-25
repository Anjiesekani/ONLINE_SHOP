import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check the initial route and set the active class
    this.setActiveLink();
  }

  // Method to set the active link based on the current URL
  setActiveLink(): void {
    const currentUrl = this.router.url;

    if (currentUrl === '/home' || currentUrl === '/') {
      this.router.navigate(['/home'], { queryParams: { category: '' } }); // Set default route if needed
    }
  }
}
