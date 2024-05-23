import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { CartComponent } from './Pages/cart/cart.component';
import { OrderComponent } from './Pages/order/order.component';
import { ViewProductsComponent } from './Pages/products/Products -list/view-products.component';
import { ViewProductComponent } from './Pages/products/view-product/view-product.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { NotifyComponent } from './Pages/notify/notify.component';
import { LayoutRoutingModule } from './layout.routing';

@NgModule({
  declarations: [
    HomepageComponent,
    CartComponent,
    OrderComponent,
    ViewProductsComponent,
    ViewProductComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotifyComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule],

  exports: [
    HomepageComponent,
    CartComponent,
    OrderComponent,
    ViewProductsComponent,
    ViewProductComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutRoutingModule,
  ],
})
export class LayoutModule {}
