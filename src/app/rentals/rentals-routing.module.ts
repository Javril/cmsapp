import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalsComponent } from './rentals.component';
import { RentalListComponent } from './rentals/rental-list/rental-list.component';
import { RentalDetailsComponent } from './rentals/rental-details/rental-details.component';

const routes: Routes = [
  {
    path: '',
    component: RentalsComponent,
    children: [
      {
        path: '',
        component: RentalListComponent
      },
      {
        path: 'rental-details',
        component: RentalDetailsComponent
      },
      {
        path: '**',
        redirectTo: 'rental-list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalsRoutingModule {}
