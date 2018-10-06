import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { PageListComponent } from './page-list/page-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, LandingRoutingModule, SharedModule],
  declarations: [
    LandingComponent,
    HomeComponent,
    PagesComponent,
    PageListComponent,
    NavbarComponent
  ]
})
export class LandingModule {}
