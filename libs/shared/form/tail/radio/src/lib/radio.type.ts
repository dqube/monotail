/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldTypeConfig, FormlyFieldConfig } from '@app/form/core';
import { FieldType, FormlyFieldProps } from '@app/form/tail/form-field';

interface RadioProps extends FormlyFieldProps {
  formCheck?: 'default' | 'inline';
}

export interface FormlyRadioFieldConfig extends FormlyFieldConfig<RadioProps> {
  type: 'radio' | Type<FormlyFieldRadio>;
}

@Component({
  selector: 'formly-field-radio',
  template: `
    <ng-template #fieldTypeTemplate>
      <!-- <div
        *ngFor="
          let option of props.options | formlySelectOptions : field | async;
          let i = index
        "
        class="form-check"
        [class.form-check-inline]="props.formCheck === 'inline'"
      >
        <input
          type="radio"
          [id]="id + '_' + i"
          class="form-check-input"
          [name]="field.name || id"
          [class.is-invalid]="showError"
          [attr.value]="option.value"
          [value]="option.value"
          [formControl]="option.disabled ? disabledControl : formControl"
          [formlyAttributes]="field"
        />
        <label class="form-check-label" [for]="id + '_' + i">
          {{ option.label }}
        </label>
      </div>-->
      <!-- <ul
        [id]="field.name"
        name="field.name || id"
        class="flex flex-col sm:flex-row"
      >
        

        <li
          *ngFor="
            let option of props.options | formlySelectOptions : field | async;
            let i = index
          "
          class="ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last-rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white"
        >
          <div class="relative flex items-start w-full">
            <div class="flex items-center h-5">
              <input
                type="checkbox"
                class="form-checkbox"
                type="radio"
                class="radio"
                [id]="id + '_' + i"
                [name]="field.name || id"
                [attr.value]="option.value"
                [value]="option.value"
                [formControl]="option.disabled ? disabledControl : formControl"
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
      </ul> -->
      <ul
        [id]="field.name"
        name="field.name || id"
        class="flex flex-col sm:flex-row"
      >
        <li
          class="ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none ltr:sm:first:rounded-tl-none rtl:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none ltr:sm:last:rounded-br-none rtl:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white"
          *ngFor="
            let option of props.options | formlySelectOptions : field | async;
            let i = index
          "
        >
          <div class="relative flex items-start w-full">
            <div class="flex items-center h-5">
              <input
                type="radio"
                class="form-radio"
                [id]="id + '_' + i"
                [name]="field.name || id"
                [attr.value]="option.value"
                [value]="option.value"
                [formControl]="option.disabled ? disabledControl : formControl"
                [formlyAttributes]="field"
              />
            </div>
            <label
              for="id + '_' + i"
              class="ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70"
            >
              {{ option.label }}
            </label>
          </div>
        </li>
      </ul>
      <!-- <div
        [id]="field.name"
        name="field.name || id"
        class="flex flex-row gap-3"
      >
        <label
          class="flex cursor-pointer gap-2"
          *ngFor="
            let option of props.options | formlySelectOptions : field | async;
            let i = index
          "
        >
          <input
            type="radio"
            class="radio"
            [id]="id + '_' + i"
            [name]="field.name || id"
            [attr.value]="option.value"
            [value]="option.value"
            [formControl]="option.disabled ? disabledControl : formControl"
            [formlyAttributes]="field"
          />
          <span for="id + '_' + i">{{ option.label }}</span>
        </label>
      </div> -->
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRadio extends FieldType<FieldTypeConfig<RadioProps>> {
  override defaultOptions = {
    props: {
      formCheck: 'default' as const,
    },
  };

  get disabledControl() {
    return new FormControl({ value: this.formControl.value, disabled: true });
  }
}
