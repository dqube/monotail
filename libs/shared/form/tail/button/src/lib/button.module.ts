import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@app/form/core';
import { FormlyTailwindFormFieldModule } from '@app/form/tail/form-field';
import { FormlyFieldButton } from './button-type.component';
@NgModule({
  declarations: [FormlyFieldButton],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyTailwindFormFieldModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'button',
          component: FormlyFieldButton,
          wrappers: ['form-field'],
          defaultOptions: {
            props: {
              btnType: 'default',
              type: 'button',
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyTailwindButtonModule {}
