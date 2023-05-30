import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotsComponent } from './dots.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DotsComponent],
  exports: [DotsComponent],
})
export class DotsModule {}
