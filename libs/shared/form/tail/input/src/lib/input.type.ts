/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@form/core';
import { FieldType, FormlyFieldProps } from '@form/tail/form-field';

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
        placeholder="Type here"
        [type]="type"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [class.border-error]="showError"
        class="input input-block focus-within:border-primary"
      />
      <ng-template #numberTmp>
        <input
          placeholder="Type here"
          [type]="type"
          [formControl]="formControl"
          [formlyAttributes]="field"
          [class.border-error]="showError"
          class="input focus-within:border-primary"
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
