import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/landing/landing.module#LandingModule'
  },
  {
    path: 'dev',
    loadChildren: 'src/app/dev/dev.module#DevModule'
  },
  {
    path: 'ecommerces',
    loadChildren: 'src/app/ecommerces/ecommerces.module#EcommercesModule'
  },
  {
    path: 'rentals',
    loadChildren: 'src/app/rentals/rentals.module#RentalsModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: 'src/app/admin/admin.module#AdminModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
