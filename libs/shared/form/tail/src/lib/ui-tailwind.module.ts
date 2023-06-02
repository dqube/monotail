/* eslint-disable @nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { FormlyTailwindCheckboxModule } from '@form/tail/checkbox';
import { FormlyTailwindFormFieldModule } from '@form/tail/form-field';
import { FormlyTailwindInputModule } from '@form/tail/input';
import { FormlyTailwindRadioModule } from '@form/tail/radio';
import { FormlyTailwindSelectModule } from '@form/tail/select';
import { FormlyTailwindTextAreaModule } from '@form/tail/textarea';
@NgModule({
  imports: [
    FormlyTailwindFormFieldModule,
    FormlyTailwindInputModule,
    FormlyTailwindSelectModule,
    FormlyTailwindCheckboxModule,
    FormlyTailwindRadioModule,
    FormlyTailwindTextAreaModule,
  ],
})
export class FormlyTailwindModule {}
