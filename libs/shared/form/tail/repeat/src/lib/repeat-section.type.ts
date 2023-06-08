/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { FieldArrayType } from '@app/form/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <h5 class="box-title">{{ props.label }}</h5>
    <p *ngIf="props.description">{{ props.description }}</p>
    <ol class="flex min-w-0 items-center whitespace-nowrap">
      <button
        type="button"
        class="ti-btn bg-primary hover:bg-primary focus:ring-primary  text-white  dark:focus:ring-offset-white/10"
        (click)="add()"
      >
        {{ props.addText }}
      </button>
    </ol>

    <div
      class="table-bordered overflow-auto rounded-sm shadow dark:shadow-white/10"
      *ngIf="field.fieldGroup!.length > 0"
    >
      <table class="ti-custom-table ti-custom-table-head">
        <tbody>
          <tr *ngFor="let field of field.fieldGroup; let i = index">
            <td><formly-field [field]="field"></formly-field></td>

            <td>
              <button
                type="button"
                class="ti-btn bg-danger hover:bg-primary focus:ring-primary  text-white  dark:focus:ring-offset-white/10"
                (click)="remove(i)"
              >
                {{ props.removeText }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <legend *ngIf="props.label">{{ props.label }}</legend>
    <p *ngIf="props.description">{{ props.description }}</p>

    <div
      *ngFor="let field of field.fieldGroup; let i = index"
      class="row align-items-baseline"
    >
      <formly-field class="col" [field]="field"></formly-field>
      <button
        type="button"
        class="ti-btn bg-danger hover:bg-primary focus:ring-primary  text-white  dark:focus:ring-offset-white/10"
        (click)="remove(i)"
      >
        {{ props.removeText }}
      </button>
    </div> -->
  `,
})
export class RepeatTypeComponent extends FieldArrayType {}
