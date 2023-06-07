/* eslint-disable @nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { FormlyTailwindCheckboxModule } from '@app/form/tail/checkbox';
import { FormlyTailwindFormFieldModule } from '@app/form/tail/form-field';
import { FormlyTailwindInputModule } from '@app/form/tail/input';
import { FormlyTailwindMultiCheckboxModule } from '@app/form/tail/multicheckbox';
import { FormlyTailwindPanelModule } from '@app/form/tail/panel';
import { FormlyTailwindRadioModule } from '@app/form/tail/radio';
import { FormlyTailwindRepeatModule } from '@app/form/tail/repeat';
import { FormlyTailwindSelectModule } from '@app/form/tail/select';
import { FormlyTailwindStepperModule } from '@app/form/tail/stepper';
import { FormlyTailwindTabModule } from '@app/form/tail/tab';
import { FormlyTailwindTableModule } from '@app/form/tail/table';
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
    FormlyTailwindStepperModule,
    FormlyTailwindTabModule,
    FormlyTailwindTableModule,
    FormlyTailwindMultiCheckboxModule,
  ],
})
export class FormlyTailwindModule {}
