/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@app/form/core';
import { FormlyFieldProps } from '@app/form/tail/form-field';

interface DatepickerProps extends FormlyFieldProps {
  defaultDate?: Date;
  dateFormat?: string;
  hourFormat?: string;
  showTime?: boolean;
  showIcon?: boolean;
  showButtonBar?: boolean;
  showOtherMonths?: boolean;
  selectOtherMonths?: boolean;
  selectionMode?: string;
  numberOfMonths?: number;
  inline?: boolean;
  readonlyInput?: boolean;
  touchUI?: boolean;
  monthNavigator?: boolean;
  yearNavigator?: boolean;
  yearRange?: string;
}

export interface FormlyDatepickerFieldConfig
  extends FormlyFieldConfig<DatepickerProps> {
  type: 'datepicker' | Type<FormlyFieldDatepicker>;
}

@Component({
  selector: 'formly-field-primeng-datepicker',
  template: `
    <p-calendar
      [defaultDate]="props.defaultDate"
      [dateFormat]="props.dateFormat"
      [hourFormat]="props.hourFormat"
      [showTime]="props.showTime"
      [showIcon]="props.showIcon"
      [showButtonBar]="props.showButtonBar"
      [showOtherMonths]="props.showOtherMonths"
      [selectOtherMonths]="props.selectOtherMonths"
      [numberOfMonths]="props.numberOfMonths"
      [inline]="props.inline"
      [readonlyInput]="props.readonlyInput"
      [touchUI]="props.touchUI"
      [monthNavigator]="props.monthNavigator"
      [yearNavigator]="props.yearNavigator"
      [yearRange]="props.yearRange"
      [placeholder]="props.placeholder"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [inputStyle]="{ width: '100%' }"
    >
    </p-calendar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldDatepicker extends FieldType<
  FieldTypeConfig<DatepickerProps>
> {}
