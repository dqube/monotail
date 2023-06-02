/* eslint-disable @nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { FormlyTailwindCheckboxModule } from '@form/tail/checkbox';
import { FormlyTailwindFormFieldModule } from '@form/tail/form-field';
import { FormlyTailwindInputModule } from '@form/tail/input';
import { FormlyTailwindSelectModule } from '@form/tail/select';

@NgModule({
  imports: [
    FormlyTailwindFormFieldModule,
    FormlyTailwindInputModule,
    FormlyTailwindSelectModule,
    FormlyTailwindCheckboxModule,
  ],
})
export class FormlyTailwindModule {}
