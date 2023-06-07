/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { FieldArrayType } from '@app/form/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <legend *ngIf="props.label">{{ props.label }}</legend>
    <p *ngIf="props.description">{{ props.description }}</p>

    <div
      *ngFor="let field of field.fieldGroup; let i = index"
      class="row align-items-baseline"
    >
      <formly-field class="col" [field]="field"></formly-field>
      <button
        type="button"
        class="ti-btn bg-danger text-white hover:bg-primary  focus:ring-primary  dark:focus:ring-offset-white/10"
        (click)="remove(i)"
      >
        {{ props.removeText }}
      </button>
    </div>
    <button
      type="button"
      class="ti-btn bg-primary text-white hover:bg-primary  focus:ring-primary  dark:focus:ring-offset-white/10"
      (click)="add()"
    >
      {{ props.addText }}
    </button>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {}
