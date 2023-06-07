/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@app/form/core';
import { FieldType, FormlyFieldProps } from '@app/form/tail/form-field';

interface MultiCheckboxProps extends FormlyFieldProps {
  formCheck: 'default' | 'inline' | 'switch' | 'inline-switch';
}

export interface FormlyMultiCheckboxFieldConfig
  extends FormlyFieldConfig<MultiCheckboxProps> {
  type: 'multicheckbox' | Type<FormlyFieldMultiCheckbox>;
}

@Component({
  selector: 'formly-field-multicheckbox',
  template: `
    <ng-template #fieldTypeTemplate>
      <!-- <div
        *ngFor="
          let option of props.options | formlySelectOptions : field | async;
          let i = index
        "
        class="form-check"
        [ngClass]="{
          'form-check-inline':
            props.formCheck === 'inline' || props.formCheck === 'inline-switch',
          'form-switch':
            props.formCheck === 'switch' || props.formCheck === 'inline-switch'
        }"
      > -->
      <ul
        [id]="field.name"
        name="field.name || id"
        class="flex max-w-sm flex-col"
      >
        <li
          class="ti-list-group dark:bg-bgdark bg-white text-gray-800 dark:border-white/10 dark:text-white"
          *ngFor="
            let option of props.options | formlySelectOptions : field | async;
            let i = index
          "
        >
          <div class="relative flex w-full items-start">
            <div class="flex h-5 items-center">
              <input
                type="checkbox"
                class="form-checkbox"
                for="id + '_' + i"
                [id]="id + '_' + i"
                [name]="field.name || id"
                multiple
                [value]="option.value"
                [checked]="isChecked(option)"
                [formlyAttributes]="field"
                [disabled]="formControl.disabled || option.disabled"
                (change)="onChange(option.value, $any($event.target).checked)"
              />
            </div>
            <label
              for="id + '_' + i"
              class="block w-full text-sm text-gray-600 ltr:ml-2.5 rtl:mr-2.5 dark:text-white/70"
            >
              {{ option.label }}
            </label>
          </div>
        </li>
      </ul>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldMultiCheckbox extends FieldType<
  FieldTypeConfig<MultiCheckboxProps>
> {
  override defaultOptions = {
    props: {
      formCheck: 'default' as const, // 'default' | 'inline' | 'switch' | 'inline-switch'
    },
  };

  onChange(value: any, checked: boolean) {
    this.formControl.markAsDirty();
    if (this.props.type === 'array') {
      this.formControl.patchValue(
        checked
          ? [...(this.formControl.value || []), value]
          : [...(this.formControl.value || [])].filter((o) => o !== value)
      );
    } else {
      this.formControl.patchValue({
        ...this.formControl.value,
        [value]: checked,
      });
    }
    this.formControl.markAsTouched();
  }

  isChecked(option: any) {
    const value = this.formControl.value;

    return (
      value &&
      (this.props.type === 'array'
        ? value.indexOf(option.value) !== -1
        : value[option.value])
    );
  }
}
