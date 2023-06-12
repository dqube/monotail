import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@app/form/core';
import { FormlySelectModule } from '@app/form/core/select';
import { FormlyTailwindFormFieldModule } from '@app/form/tail/form-field';
import { AutoCompleteModule } from '@primeng/autocomplete';
import { FormlyFieldAutoComplete } from './autocomplete.type';
@NgModule({
  declarations: [FormlyFieldAutoComplete],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FormlyTailwindFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'autocomplete',
          component: FormlyFieldAutoComplete,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyAutoCompleteModule {}
