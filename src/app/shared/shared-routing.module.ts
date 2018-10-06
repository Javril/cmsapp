import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../dev/redux/reducers/tutorial.reducer';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  exports: [RouterModule, StoreModule]
})
export class SharedRoutingModule {}
