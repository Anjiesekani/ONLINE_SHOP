import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Product.component';

import { NotifyComponent } from './Pages/notify/notify.component';
import { FooterComponent } from './Common/footer/footer.component';
import { HeaderComponent } from './Common/header/header.component';
import { LoginComponentComponent } from '../Auth/login-component/login-component.component';
import { ProductDetail } from './Pages/Products/ProductDetail/ProductDetail.component';
import { ProductList } from './Pages/Products/ProductList/ProductList.component';
import { ProductCategoryComponent } from './Pages/home-page/product-category/product-category.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'notify', component: NotifyComponent }, // Route to show NotifyComponent
      { path: 'footer', component: FooterComponent },
      { path: 'header', component: HeaderComponent },

      {
        path: 'login',
        component: LoginComponentComponent,
      },
      { path: 'products', component: ProductList },
      { path: 'product/:id', component: ProductDetail },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
