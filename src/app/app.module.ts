import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { AutoWidthComponent } from './layout/auto-width/auto-width.component';
import {MenubarModule} from 'primeng/menubar';
import {RippleModule} from 'primeng/ripple';
import {AvatarModule} from 'primeng/avatar';
import {BadgeModule} from 'primeng/badge';
import {NgOptimizedImage} from '@angular/common';
import {MenuModule} from 'primeng/menu';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import {ButtonModule} from 'primeng/button';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BasketComponent} from './page/basket/basket.component';
import {OrderItemComponent} from './page/basket/order-item/order-item.component';
import {UpsellingComponent} from './page/basket/upselling/upselling.component';
import {BundleComponent} from './page/basket/bundle/bundle.component';
import {ProductListComponent} from './page/product-list/product-list.component';
import {ProductCardComponent} from './page/product-list/product-card/product-card.component';
import { AdBannerComponent } from './page/product-list/ad-banner/ad-banner.component';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PriceComponent } from './layout/price/price.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DefaultLayoutComponent,
        AutoWidthComponent,
        PageNotFoundComponent,
        BasketComponent,
        OrderItemComponent,
        UpsellingComponent,
        BundleComponent,
        ProductListComponent,
        ProductCardComponent,
        AdBannerComponent,
        PriceComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenubarModule,
        RippleModule,
        AvatarModule,
        BadgeModule,
        NgOptimizedImage,
        MenuModule,
        ButtonModule,
        NoopAnimationsModule,
        CardModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        DefaultLayoutComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
