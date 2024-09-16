import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './Pages/products/view-product/view-product.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { NotifyComponent } from './Pages/notify/notify.component';
import { LayoutRoutingModule } from './HomePage.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { ProductsListComponent } from './Pages/products/Products - list/products-list.component';
import { HomePageComponent } from './HomePage.component';
import { HomeComponent } from './Pages/home/home.component';
import { PlumbingComponent } from './Pages/home/plumbing/plumbing.component';
import { PaintingComponent } from './Pages/home/painting/painting.component';
import { ToolsComponent } from './Pages/home/tools/tools.component';
import { DecorComponent } from './Pages/home/decor/decor.component';
import { BuildingComponent } from './Pages/home/building/building.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    ProductsListComponent,
    ViewProductComponent,
    HeaderComponent,
    FooterComponent,
    NotifyComponent,
    NavbarComponent,
    HomePageComponent,
    HomeComponent,
    PlumbingComponent,
    PaintingComponent,
    ToolsComponent,
    DecorComponent,
    BuildingComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],

  exports: [
    ViewProductComponent,
    HeaderComponent,
    FooterComponent,
    FormsModule,
  ],
})
export class HomePageModule {}
