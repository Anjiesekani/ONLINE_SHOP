import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { NotifyComponent } from './Pages/notify/notify.component';
import { LayoutRoutingModule } from './Product.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponentComponent } from '../Auth/login-component/login-component.component';
import { ProductComponent } from './Product.component';
import { ProductDetail } from './Pages/Products/ProductDetail/ProductDetail.component';
import { ProductList } from './Pages/Products/ProductList/ProductList.component';
import { OffersComponent } from './Pages/home-page/offers/offers.component';
import { ProductCategoryComponent } from './Pages/home-page/product-category/product-category.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotifyComponent,
    NavbarComponent,
    ProductComponent,
    LoginComponentComponent,
    ProductDetail,
    ProductList,
    OffersComponent,
    ProductCategoryComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    FormsModule,
  ],

  exports: [HeaderComponent, FooterComponent, FormsModule],
})
export class ProductModule {}
