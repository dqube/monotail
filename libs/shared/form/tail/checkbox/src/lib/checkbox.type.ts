/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@app/form/core';
import { FieldType, FormlyFieldProps } from '@app/form/tail/form-field';

interface CheckboxProps extends FormlyFieldProps {
  formCheck?: 'default' | 'inline' | 'switch' | 'inline-switch' | 'nolabel';
  indeterminate?: boolean;
}

export interface FormlyCheckboxFieldConfig
  extends FormlyFieldConfig<CheckboxProps> {
  type: 'checkbox' | Type<FormlyFieldCheckbox>;
}

@Component({
  selector: 'formly-field-checkbox',
  template: `
    <ng-template #fieldTypeTemplate>
      <!-- <div
        class="checkbox"
        [ngClass]="{
          'form-check-inline':
            props.formCheck === 'inline' || props.formCheck === 'inline-switch',
          'form-switch':
            props.formCheck === 'switch' || props.formCheck === 'inline-switch'
        }"
      >
        <input
          type="checkbox"
          [class.is-invalid]="showError"
          class="form-check-input"
          [class.position-static]="props.formCheck === 'nolabel'"
          [indeterminate]="props.indeterminate && formControl.value == null"
          [formControl]="formControl"
          [formlyAttributes]="field"
        />
        <label
          *ngIf="props.formCheck !== 'nolabel'"
          [for]="id"
          class="form-check-label"
        >
          {{ props.label }}
          <span
            *ngIf="props.required && props.hideRequiredMarker !== true"
            aria-hidden="true"
            >*</span
          >
        </label>
        
      </div> -->
      <div>
        <label
          *ngIf="props.formCheck !== 'nolabel'"
          [for]="id"
          class="flex cursor-pointer gap-2"
        >
          <input
            type="checkbox"
            class="checkbox"
            [formControl]="formControl"
            [formlyAttributes]="field"
          />
          <span>{{ props.label }}</span>
        </label>
        <!-- <span
          *ngIf="props.required && props.hideRequiredMarker !== true"
          aria-hidden="true"
          >*</span
        > -->
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCheckbox extends FieldType<
  FieldTypeConfig<CheckboxProps>
> {
  override defaultOptions = {
    props: {
      indeterminate: true,
      hideLabel: true,
      formCheck: 'default' as const,
    },
  };
}
