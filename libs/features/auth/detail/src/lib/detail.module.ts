import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@app/form/core';
import { DetailComponent } from './detail.component';
import { detailRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(detailRoutes),
    ReactiveFormsModule,
    FormlyModule,
  ],
  declarations: [DetailComponent],
  exports: [DetailComponent],
})
export class DetailModule {}
