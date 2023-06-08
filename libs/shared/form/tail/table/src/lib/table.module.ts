import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@app/form/core';
import { FormlyFieldTable } from './table.type';

@NgModule({
  declarations: [FormlyFieldTable],
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [{ name: 'table', component: FormlyFieldTable, wrappers: [] }],
    }),
  ],
})
export class FormlyTailwindTableModule {}
