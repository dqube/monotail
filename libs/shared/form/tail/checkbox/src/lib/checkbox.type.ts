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
      <ng-template [ngIf]="!props.multiple" [ngIfElse]="multipleCheckbox">
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

      <ng-template #multipleCheckbox>
        <ul
          [id]="field.name"
          name="field.name || id"
          class="max-w-sm flex flex-col"
        >
          <li
            class="ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white"
            *ngFor="
              let option of props.options | formlySelectOptions : field | async;
              let i = index
            "
          >
            <div class="relative flex items-start w-full">
              <div class="flex items-center h-5">
                <input
                  type="checkbox"
                  class="form-checkbox"
                  for="id + '_' + i"
                  [id]="id + '_' + i"
                  [name]="field.name || id"
                  multiple
                  [formControl]="formControl"
                  [formlyAttributes]="field"
                />
              </div>
              <label
                for="id + '_' + i"
                class="ltr:ml-2.5 rtl:mr-2.5 block w-full text-sm text-gray-600 dark:text-white/70"
              >
                {{ option.label }}
              </label>
            </div>
          </li>
        </ul>
      </ng-template>
      <!-- <div>
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
        < <span
          *ngIf="props.required && props.hideRequiredMarker !== true"
          aria-hidden="true"
          >*</span
        > 
      </div> -->
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
