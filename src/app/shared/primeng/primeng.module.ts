import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  imports: [CommonModule, AutoCompleteModule],
  exports: [AutoCompleteModule],
  declarations: []
})
export class PrimengModule {}
