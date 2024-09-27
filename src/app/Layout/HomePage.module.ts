import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { NotifyComponent } from './Pages/notify/notify.component';
import { LayoutRoutingModule } from './HomePage.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { HomePageComponent } from './HomePage.component';
import { HomeComponent } from './Pages/home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotifyComponent,
    NavbarComponent,
    HomePageComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],

  exports: [HeaderComponent, FooterComponent, FormsModule],
})
export class HomePageModule {}
