import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DevRoutingModule } from './dev-routing.module';
import { DevComponent } from './dev.component';
import { SearchComponent } from './search/search.component';
import { ReduxComponent } from './redux/redux.component';
import { AngproComponent } from './angpro/angpro.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CssbootstrapComponent } from './cssbootstrap/cssbootstrap.component';
import { QuoteComponent } from './cssbootstrap/quote/quote.component';
import { AuthorComponent } from './cssbootstrap/author/author.component';
import { ToggleComponent } from './search/toggle/toggle.component';
import { ReadComponent } from './redux/read/read.component';
import { CreateComponent } from './redux/create/create.component';
import { ReactivexComponent } from './reactivex/reactivex.component';
import { UpdateComponent } from './redux/update/update.component';

@NgModule({
  imports: [CommonModule, DevRoutingModule, SharedModule],
  declarations: [DevComponent, SearchComponent, ReduxComponent, AngproComponent, ProgressBarComponent, CountdownComponent, CssbootstrapComponent, QuoteComponent, AuthorComponent, ToggleComponent, ReadComponent, CreateComponent, ReactivexComponent, UpdateComponent]
})
export class DevModule {}
