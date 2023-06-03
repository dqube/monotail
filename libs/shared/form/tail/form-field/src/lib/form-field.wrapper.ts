/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component } from '@angular/core';
import {
  FormlyFieldProps as CoreFormlyFieldProps,
  FieldWrapper,
  FormlyFieldConfig,
} from '@app/form/core';

export interface FormlyFieldProps extends CoreFormlyFieldProps {
  hideRequiredMarker?: boolean;
  hideLabel?: boolean;
}

@Component({
  selector: 'formly-wrapper-tail-form-field',
  template: `
    <div class="form-field group mb-2">
      <label
        *ngIf="props.label && props.hideLabel !== true"
        [for]="id"
        class="form-label group-focus-within:text-primary"
        [class.text-error]="showError"
      >
        {{ props.label }}
        <span class="form-label-alt text-error">*</span>
      </label>
      <ng-container #fieldComponent></ng-container>
      <div *ngIf="showError" class="text-error text-xs italic">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
      <label class="form-label" *ngIf="props.description && !showError">
        <span
          class="form-label-alt text-xs italic group-focus-within:text-primary"
          >{{ props.description }}</span
        >
      </label>
    </div>
  `,
})
export class FormlyWrapperFormField extends FieldWrapper<
  FormlyFieldConfig<FormlyFieldProps>
> {}
