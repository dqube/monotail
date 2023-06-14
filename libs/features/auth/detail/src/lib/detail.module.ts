import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@app/form/core';
import { ButtonModule } from '@primeng/button';
import { DrawerModule } from '@primeng/drawer';
import { ListboxModule } from '@primeng/listbox';
import { DetailComponent } from './detail.component';
import { detailRoutes } from './lib.routes';
import { TestComponent } from './test.component';
@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ListboxModule,
    DrawerModule,
    RouterModule.forChild(detailRoutes),
    ReactiveFormsModule,
    FormlyModule,
  ],
  declarations: [DetailComponent, TestComponent],
  exports: [DetailComponent, TestComponent],
})
export class DetailModule {}
