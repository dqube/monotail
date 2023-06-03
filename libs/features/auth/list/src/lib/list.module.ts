import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { listRoutes } from './lib.routes';
import { ListComponent } from './list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(listRoutes)],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ListModule {}
