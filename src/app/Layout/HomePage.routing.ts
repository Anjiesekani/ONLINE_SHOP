import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './HomePage.component';
import { HomeComponent } from './Pages/home/home.component';
import { NotifyComponent } from './Pages/notify/notify.component';
import { FooterComponent } from './Common/footer/footer.component';
import { HeaderComponent } from './Common/header/header.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
