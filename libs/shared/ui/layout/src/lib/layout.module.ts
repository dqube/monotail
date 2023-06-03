/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyLayoutModule } from './empty/empty.module';
import { LayoutComponent } from './layout/layout.component';
import { ClassicLayoutModule } from './vertical/classic/classic.module';

const layoutModules = [
  // Empty
  EmptyLayoutModule,
  //Vertical
  ClassicLayoutModule,
];
@NgModule({
  imports: [CommonModule, ...layoutModules],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
