import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmptyLayoutComponent } from './empty.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EmptyLayoutComponent],
  exports: [EmptyLayoutComponent],
})
export class EmptyLayoutModule {}
