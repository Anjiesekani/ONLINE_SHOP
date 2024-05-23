import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  ngOnInit() {
    // Call toggleSidebar() when the component is initialized
    this.toggleSidebar();

    // Initialize Bootstrap collapse functionality
    var collapseElementList = [].slice.call(
      document.querySelectorAll('.collapse')
    );
    var collapseList = collapseElementList.map(function (collapseEl) {
      //@ts-ignore
      return new bootstrap.Collapse(collapseEl, { toggle: false });
    });
  }

  // Function to toggle sidebar on click
  toggleSidebar() {
    // Select the toggle button and the sidebar
    const hamBurger = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('#sidebar');

    // Add click event listener to toggle button
    if (hamBurger && sidebar) {
      hamBurger.addEventListener('click', function () {
        // Toggle the 'expand' class on the sidebar
        sidebar.classList.toggle('expand');
      });
    }
  }
}
