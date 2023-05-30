import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeComponent } from './range.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RangeComponent],
  exports: [RangeComponent],
})
export class RangeModule {}
