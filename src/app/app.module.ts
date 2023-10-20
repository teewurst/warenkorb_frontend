import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { DefaultWidthComponent } from './layout/default-width/default-width.component';
import { HeaderBasketComponent } from './layout/header/header-basket/header-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultWidthComponent,
    HeaderBasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
