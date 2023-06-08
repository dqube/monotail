/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, Type } from '@angular/core';
import {
  FieldArrayType,
  FieldTypeConfig,
  FormlyFieldConfig,
} from '@app/form/core';
import { FormlyFieldProps } from '@app/form/tail/form-field';
interface TableColumnProps {
  width?: number;
  label?: string;
}
interface TableProps extends FormlyFieldProps {
  columns: TableColumnProps[];
}

export interface FormlyTableFieldConfig extends FormlyFieldConfig<TableProps> {
  type: 'table' | Type<FormlyFieldTable>;
}
@Component({
  selector: 'formly-field-table',
  template: `
    <div class="box">
      <div class="box-header">
        <h5 class="box-title">{{ props.label }}</h5>
      </div>
      <div class="box-body p-0">
        <div class="overflow-auto">
          <table
            class="ti-custom-table ti-custom-table-head ti-custom-table-hover"
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  *ngFor="let column of props.columns; let i = index"
                >
                  {{ column.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let field of field.fieldGroup; let i = index">
                <td *ngFor="let child of field.fieldGroup; let j = index">
                  <formly-field [field]="child"></formly-field>
                </td>
                <!-- <td class="text-end font-medium">
                  <a
                    class="text-primary hover:text-primary"
                    href="javascript:void(0);"
                    >Delete</a
                  >
                </td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <mat-horizontal-stepper>
      <mat-step
        *ngFor="
          let step of field.fieldGroup;
          let index = index;
          let last = last
        "
      >
        <ng-template matStepLabel>{{ step.props.label }}</ng-template>
        <formly-field [field]="step"></formly-field>
        <div>
          <button
            matStepperPrevious
            *ngIf="index !== 0"
            class="btn btn-primary"
            type="button"
          >
            Back
          </button>
          <button
            matStepperNext
            *ngIf="!last"
            class="btn btn-primary"
            type="button"
            [disabled]="!isValid(step)"
          >
            Next
          </button>
          <button
            *ngIf="last"
            class="btn btn-primary"
            [disabled]="!form.valid"
            type="submit"
          >
            Submit
          </button>
        </div>
      </mat-step>
    </mat-horizontal-stepper> -->
  `,
})
export class FormlyFieldTable extends FieldArrayType<
  FieldTypeConfig<TableProps>
> {}
