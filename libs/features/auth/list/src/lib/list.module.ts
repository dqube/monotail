import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@app/form/core';
import { listRoutes } from './lib.routes';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(listRoutes),
    ReactiveFormsModule,
    FormlyModule,
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ListModule {}
