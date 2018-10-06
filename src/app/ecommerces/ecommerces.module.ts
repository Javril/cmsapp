import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommercesRoutingModule } from './ecommerces-routing.module';
import { EcommercesComponent } from './ecommerces.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, EcommercesRoutingModule, SharedModule],
  declarations: [
    EcommercesComponent,
    ProductListComponent,
    ProductDetailsComponent,
    NavbarComponent
  ]
})
export class EcommercesModule {}
