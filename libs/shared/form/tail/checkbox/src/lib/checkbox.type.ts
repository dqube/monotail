/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@app/form/core';
import { FieldType, FormlyFieldProps } from '@app/form/tail/form-field';

interface CheckboxProps extends FormlyFieldProps {
  formCheck?: 'default' | 'inline' | 'switch' | 'inline-switch' | 'nolabel';
  multiple?: boolean;
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
      <input
        type="checkbox"
        class="form-checkbox mt-0.5"
        [formControl]="formControl"
        [formlyAttributes]="field"
      />
      <label
        [for]="id"
        class="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70"
        >{{ props.label }}</label
      >
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
