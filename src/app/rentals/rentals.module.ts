import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalsRoutingModule } from './rentals-routing.module';
import { RentalsComponent } from './rentals.component';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';
import { RentalDetailsComponent } from './rentals/rental-details/rental-details.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RentalsRoutingModule
  ],
  declarations: [RentalsComponent, RentalListComponent, RentalDetailsComponent, NavbarComponent]
})
export class RentalsModule { }
