/* eslint-disable @nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { FormlyTailwindCheckboxModule } from '@app/form/tail/checkbox';
import { FormlyTailwindFormFieldModule } from '@app/form/tail/form-field';
import { FormlyTailwindInputModule } from '@app/form/tail/input';
import { FormlyTailwindRadioModule } from '@app/form/tail/radio';
import { FormlyTailwindSelectModule } from '@app/form/tail/select';
import { FormlyTailwindTextAreaModule } from '@app/form/tail/textarea';
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
