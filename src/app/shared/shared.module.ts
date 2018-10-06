import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-toggle-switch';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupComponent } from './signup/signup.component';
import { NoContentComponent } from './no-content/no-content.component';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    PrimengModule,
    UiSwitchModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NoContentComponent,
    MessageComponent,
    SidebarComponent,
    SignupComponent,
    FormsModule,
    PrimengModule,
    UiSwitchModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NoContentComponent,
    MessageComponent,
    SidebarComponent,
    SignupComponent
  ]
})
export class SharedModule {}
