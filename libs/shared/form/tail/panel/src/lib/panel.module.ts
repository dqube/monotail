import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@app/form/core';
import { PanelFieldWrapper } from './panel-wrapper';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild({
      wrappers: [{ name: 'panel', component: PanelFieldWrapper }],
    }),
  ],
})
export class FormlyTailwindPanelModule {}
