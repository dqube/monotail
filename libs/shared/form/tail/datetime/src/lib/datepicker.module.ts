import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@app/form/core';
import { FormlyTailwindFormFieldModule } from '@app/form/tail/form-field';
import { CalendarModule } from '@primeng/calendar';
import { FormlyFieldDatepicker } from './datepicker.type';

@NgModule({
  declarations: [FormlyFieldDatepicker],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,

    FormlyTailwindFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'datepicker',
          component: FormlyFieldDatepicker,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyDatepickerModule {}
