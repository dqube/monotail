/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { FieldWrapper } from '@app/form/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
    <div class="col-span-12">
      <div class="box">
        <div class="box-header">
          <h5 class="box-title">{{ props.label }}</h5>
        </div>
        <div class="box-body">
          <ng-container #fieldComponent></ng-container>
        </div>
      </div>
    </div>
  `,
})
export class PanelFieldWrapper extends FieldWrapper {}
