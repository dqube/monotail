/* eslint-disable @nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { FormlyTailwindCheckboxModule } from '@app/form/tail/checkbox';
import { FormlyTailwindFormFieldModule } from '@app/form/tail/form-field';
import { FormlyTailwindInputModule } from '@app/form/tail/input';
import { FormlyTailwindPanelModule } from '@app/form/tail/panel';
import { FormlyTailwindRadioModule } from '@app/form/tail/radio';
import { FormlyTailwindRepeatModule } from '@app/form/tail/repeat';
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
    FormlyTailwindPanelModule,
    FormlyTailwindRepeatModule,
  ],
})
export class FormlyTailwindModule {}
