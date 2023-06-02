/* eslint-disable @nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { FormlyTailwindFormFieldModule } from '@form/tail/form-field';
import { FormlyTailwindInputModule } from '@form/tail/input';
import { FormlyTailwindSelectModule } from '@form/tail/select';

@NgModule({
  imports: [
    FormlyTailwindFormFieldModule,
    FormlyTailwindInputModule,
    FormlyTailwindSelectModule,
  ],
})
export class FormlyTailwindModule {}
