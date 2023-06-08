import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@app/form/core';
import { FormlyFieldTab } from './tab.type';

@NgModule({
  declarations: [FormlyFieldTab],
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [{ name: 'stepper', component: FormlyFieldTab, wrappers: [] }],
    }),
  ],
})
export class FormlyTailwindTabModule {}
