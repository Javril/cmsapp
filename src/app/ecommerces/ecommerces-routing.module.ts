import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcommercesComponent } from './ecommerces.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: EcommercesComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'product-details',
        component: ProductDetailsComponent
      },
      {
        path: '**',
        redirectTo: 'product-list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommercesRoutingModule {}
