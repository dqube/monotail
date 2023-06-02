/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@form/core';
import { FieldType, FormlyFieldProps } from '@form/tail/form-field';

interface TextAreaProps extends FormlyFieldProps {
  cols?: number;
  rows?: number;
}

export interface FormlyTextAreaFieldConfig
  extends FormlyFieldConfig<TextAreaProps> {
  type: 'textarea' | Type<FormlyFieldTextArea>;
}

@Component({
  selector: 'formly-field-textarea',
  template: `
    <ng-template #fieldTypeTemplate>
      <textarea
        [formControl]="formControl"
        [cols]="props.cols"
        [rows]="props.rows"
        [class.border-error]="showError"
        class="textarea max-w-full focus-within:border-primary"
        [formlyAttributes]="field"
        [placeholder]="props.placeholder"
      >
      </textarea>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTextArea extends FieldType<
  FieldTypeConfig<TextAreaProps>
> {
  override defaultOptions = {
    props: {
      cols: 1,
      rows: 5,
    },
  };
}
