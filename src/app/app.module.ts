/* eslint-disable max-len */
import { LoginGuard } from './guards/login.guard';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AppService } from './app.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function jwtOptionsFactory() {
  return {
    tokenGetter: () => sessionStorage.getItem('token'),
    whitelistedDomains: ['localhost']
  };
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    CardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    })],
  providers: [MessageService, AppService, ConfirmationService, { provide: LocationStrategy, useClass: HashLocationStrategy }, LoginGuard, { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
