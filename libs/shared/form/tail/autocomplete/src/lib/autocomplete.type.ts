/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { FieldTypeConfig, FormlyFieldConfig } from '@app/form/core';
import { FormlyFieldSelectProps } from '@app/form/core/select';
import { FieldType, FormlyFieldProps } from '@app/form/tail/form-field';
import { take } from 'rxjs/operators';

interface AutoCompleteProps extends FormlyFieldProps, FormlyFieldSelectProps {
  multiple?: boolean;
  compareWith?: (o1: any, o2: any) => boolean;
}

export interface FormlyAutoCompleteFieldConfig
  extends FormlyFieldConfig<AutoCompleteProps> {
  type: 'autocomplete' | Type<FormlyFieldAutoComplete>;
}

@Component({
  selector: 'formly-field-autocomplete',
  template: `
    <p-autoComplete
      [placeholder]="props.placeholder"
      [suggestions]="props.options | formlySelectOptions : field | async"
      [formControl]="formControl"
      [formlyAttributes]="field"
      field="label"
      (completeMethod)="props.change(field, $event)"
    >
      ></p-autoComplete
    >

    <!-- <p-autoComplete [(ngModel)]="selectedCountry" [forceSelection]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name"></p-autoComplete> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldAutoComplete extends FieldType<
  FieldTypeConfig<AutoCompleteProps>
> {
  override defaultOptions = {
    props: {
      compareWith(o1: any, o2: any) {
        return o1 === o2;
      },
    },
  };

  // workaround for https://github.com/angular/angular/issues/10010
  /**
   * TODO: Check if this is still needed
   */
  @ViewChild(SelectControlValueAccessor) set selectAccessor(s: any) {
    if (!s) {
      return;
    }

    const writeValue = s.writeValue.bind(s);
    if (s._getOptionId(s.value) === null) {
      writeValue(s.value);
    }

    s.writeValue = (value: any) => {
      const id = s._idCounter;
      writeValue(value);
      if (value === null) {
        this.ngZone.onStable
          .asObservable()
          .pipe(take(1))
          .subscribe(() => {
            if (
              id !== s._idCounter &&
              s._getOptionId(value) === null &&
              s._elementRef.nativeElement.selectedIndex !== -1
            ) {
              writeValue(value);
            }
          });
      }
    };
  }

  constructor(private ngZone: NgZone, hostContainerRef: ViewContainerRef) {
    super(hostContainerRef);
  }
}
