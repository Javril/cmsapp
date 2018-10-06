import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { PageListComponent } from './page-list/page-list.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'article',
        component: PageListComponent
      },
      {
        path: 'pages/:url',
        component: PagesComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
