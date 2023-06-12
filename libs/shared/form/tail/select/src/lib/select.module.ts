import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@app/form/core';
import { FormlySelectModule } from '@app/form/core/select';
import { FormlyTailwindFormFieldModule } from '@app/form/tail/form-field';
import { DropdownModule } from '@primeng/dropdown';
import { MultiSelectModule } from '@primeng/multiselect';
import { FormlyFieldSelect } from './select.type';
@NgModule({
  declarations: [FormlyFieldSelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    MultiSelectModule,
    FormlyTailwindFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: FormlyFieldSelect,
          wrappers: ['form-field'],
        },
        { name: 'enum', extends: 'select' },
      ],
    }),
  ],
})
export class FormlyTailwindSelectModule {}
