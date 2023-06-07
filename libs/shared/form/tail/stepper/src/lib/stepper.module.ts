import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@app/form/core';
import { FormlyFieldStepper } from './stepper.type';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [{ name: 'stepper', component: FormlyFieldStepper, wrappers: [] }],
    }),
  ],
})
export class FormlyTailwindStepperModule {}
