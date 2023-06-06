/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@app/form/core';
import { FieldType, FormlyFieldProps } from '@app/form/tail/form-field';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputProps extends FormlyFieldProps {}

export interface FormlyInputFieldConfig extends FormlyFieldConfig<InputProps> {
  type: 'input' | Type<FormlyFieldInput>;
}

@Component({
  selector: 'formly-field-input',
  template: `
    <!-- <ng-template #fieldTypeTemplate>
      <input
        *ngIf="type !== 'number'; else numberTmp"
        [type]="type"
        [formControl]="formControl"
        class="form-control"
        [formlyAttributes]="field"
        [class.is-invalid]="showError"
       
      /> -->
    <ng-template #fieldTypeTemplate>
      <input
        *ngIf="type !== 'number'; else numberTmp"
        [placeholder]="props.placeholder"
        [type]="type"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [class.border-danger]="showError"
        class="my-auto form-input hover:border-primary focus:border-primary"
      />
      <ng-template #numberTmp>
        <input
          [placeholder]="props.placeholder"
          [type]="type"
          [formControl]="formControl"
          [formlyAttributes]="field"
          [class.border-danger]="showError"
          class="my-auto form-input hover:border-primary focus:border-primary"
        />
      </ng-template>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInput extends FieldType<FieldTypeConfig<InputProps>> {
  get type() {
    return this.props.type || 'text';
  }
}
