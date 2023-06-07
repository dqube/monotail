import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@app/form/core';
import { RepeatTypeComponent } from './repeat-section.type';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [{ name: 'repeat', component: RepeatTypeComponent }],
    }),
  ],
  declarations: [RepeatTypeComponent],
})
export class FormlyTailwindRepeatModule {}
