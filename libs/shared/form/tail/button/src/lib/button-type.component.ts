/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@app/form/core';
import { FieldType, FormlyFieldProps } from '@app/form/tail/form-field';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonProps extends FormlyFieldProps {
  text?: string;
  btnType?: string;
}

export interface FormlyInputFieldConfig extends FormlyFieldConfig<ButtonProps> {
  type: 'button' | Type<FormlyFieldButton>;
}
@Component({
  selector: 'formly-field-button',
  template: `
    <div>
      <button
        [type]="props.type"
        [ngClass]="'ti-btn ti-btn-' + props.btnType"
        (click)="onClick($event)"
      >
        {{ props.text }}
      </button>
    </div>
  `,
})
export class FormlyFieldButton extends FieldType<FieldTypeConfig<ButtonProps>> {
  onClick($event: Event) {
    if (this.props.click) {
      this.props.click($event);
    }
  }
}
