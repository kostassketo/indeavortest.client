import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { NavComponent } from '../core/components/nav/nav.component';

import { ErrorInterceptorProvider } from '../shared/_interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  exports: [
    NavComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    ErrorInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
