import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevComponent } from './dev.component';
import { SearchComponent } from './search/search.component';
import { ReduxComponent } from './redux/redux.component';
import { AngproComponent } from './angpro/angpro.component';
import { CssbootstrapComponent } from './cssbootstrap/cssbootstrap.component';
import { ReactivexComponent } from './reactivex/reactivex.component';

const routes: Routes = [
  {
    path: '',
    component: DevComponent,
    children: [
      {
        path: '',
        component: SearchComponent
      },
      {
        path: 'angpro',
        component: AngproComponent
      },
      {
        path: 'redux',
        component: ReduxComponent
      },
      {
        path: 'reactivex',
        component: ReactivexComponent
      },
      {
        path: 'cssbootstrap',
        component: CssbootstrapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule {}
