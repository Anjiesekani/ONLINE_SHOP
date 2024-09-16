import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './HomePage.component';
import { HomeComponent } from './Pages/home/home.component';
import { NotifyComponent } from './Pages/notify/notify.component';
import { FooterComponent } from './Common/footer/footer.component';
import { HeaderComponent } from './Common/header/header.component';
import { ViewProductComponent } from './Pages/products/view-product/view-product.component';
import { ProductsListComponent } from './Pages/products/Products - list/products-list.component';
import { BuildingComponent } from './Pages/home/building/building.component';
import { DecorComponent } from './Pages/home/decor/decor.component';
import { PaintingComponent } from './Pages/home/painting/painting.component';
import { PlumbingComponent } from './Pages/home/plumbing/plumbing.component';
import { ToolsComponent } from './Pages/home/tools/tools.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', component: HomeComponent }, // Default route
      { path: 'notify', component: NotifyComponent }, // Route to show NotifyComponent
      { path: 'footer', component: FooterComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'home', component: HomeComponent },
      { path: 'building', component: BuildingComponent },
      { path: 'decor', component: DecorComponent },
      { path: 'painting', component: PaintingComponent },
      { path: 'plumbing', component: PlumbingComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'viewproduct', component: ViewProductComponent },
      { path: 'tools', component: ToolsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
