import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Common/footer/footer.component';
import { HeaderComponent } from './Common/header/header.component';
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { CartComponent } from './Pages/cart/cart.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { OrderComponent } from './Pages/order/order.component';
import { ViewProductComponent } from './Pages/products/view-product/view-product.component';
import { ViewProductsComponent } from './Pages/products/Products -list/view-products.component';
import { NotifyComponent } from './Pages/notify/notify.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },

  {
    path: 'header',
    component: HeaderComponent,
  },

  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'itemView',
    component: ViewProductComponent,
  },
  {
    path: 'allproducts',
    component: ViewProductsComponent,
  },
  {
    path: 'notify',
    component: NotifyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
