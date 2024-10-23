import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductModule } from './Product/Product.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthInterceptorService } from './Services/auth-interceptor.service';
import { LoggingInterceptorService } from './Services/logging-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCCXffBzbWqeuv5diURRvZg_mqcRGYFszk',
      authDomain: 'online-project-cfbc7.firebaseapp.com',
      databaseURL: 'https://online-project-cfbc7-default-rtdb.firebaseio.com',
      projectId: 'online-project-cfbc7',
      storageBucket: 'online-project-cfbc7.appspot.com',
      messagingSenderId: '1022464669943',
      appId: '1:1022464669943:web:53c958be7e76c063effbf2',
      measurementId: 'G-9D808WEJ36',
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
