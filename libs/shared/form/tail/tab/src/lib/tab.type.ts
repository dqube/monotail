/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@app/form/core';
@Component({
  selector: 'formly-field-stepper',
  template: `
    <div class="box">
      <div class="box-header">
        <h5 class="box-title">Tabs With Underline</h5>
      </div>
      <div class="box-body">
        <div class="border-b-2 border-gray-200 dark:border-white/10">
          <nav class="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
            <a
              class="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary hover:text-primary active inline-flex items-center gap-2 whitespace-nowrap border-b-[3px] border-transparent px-1 py-4  text-sm text-gray-500 dark:text-white/70"
              href="javascript:void(0);"
              id="underline-item-1"
              aria-controls="underline-1"
            >
              Tab 1
            </a>
            <a
              class="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary hover:text-primary inline-flex items-center gap-2 whitespace-nowrap border-b-[3px] border-transparent px-1 py-4 text-sm  text-gray-500 dark:text-white/70"
              href="javascript:void(0);"
              id="underline-item-2"
              data-hs-tab="#underline-2"
              aria-controls="underline-2"
            >
              Tab 2
            </a>
            <a
              class="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary hover:text-primary inline-flex items-center gap-2 whitespace-nowrap border-b-[3px] border-transparent px-1 py-4 text-sm  text-gray-500 dark:text-white/70"
              href="javascript:void(0);"
              id="underline-item-3"
              data-hs-tab="#underline-3"
              aria-controls="underline-3"
            >
              Tab 3
            </a>
          </nav>
        </div>

        <div class="mt-3">
          <div
            id="underline-1"
            role="tabpanel"
            aria-labelledby="underline-item-1"
          >
            <p
              class="rounded-sm border border-gray-200 p-5 text-gray-500 dark:border-white/10 dark:text-white/70"
            >
              How hotel deals can help you live a better life. How celebrity
              cruises aren't as bad as you think. How cultural solutions can
              help you predict the future. How to cheat at dog friendly hotels
              and get away with it. 17 problems with summer activities. How to
              cheat at travel agents and get away with it. How not knowing
              family trip ideas makes you a rookie. What everyone is saying
              about daily deals. How twitter can teach you about carnival
              cruises. How to start using cultural solutions.
            </p>
          </div>
          <div
            id="underline-2"
            class="hidden"
            role="tabpanel"
            aria-labelledby="underline-item-2"
          >
            <p
              class="rounded-sm border border-gray-200 p-5 text-gray-500 dark:border-white/10 dark:text-white/70"
            >
              How travel coupons make you a better lover. Why cultural solutions
              are the new black. Why mom was right about travel insurances. How
              family trip ideas can help you predict the future. How carnival
              cruises make you a better lover. Why you'll never succeed at daily
              deals. 11 ways cheapest flights can find you the love of your
              life. The complete beginner's guide to mission trips. If you read
              one article about cultural notes read this one. Why you shouldn't
              eat vacation package in bed.
            </p>
          </div>
          <div
            id="underline-3"
            class="hidden"
            role="tabpanel"
            aria-labelledby="underline-item-3"
          >
            <p
              class="rounded-sm border border-gray-200 p-5 text-gray-500 dark:border-white/10 dark:text-white/70"
            >
              Unbelievable healthy snack success stories. 12 facts about safe
              food handling tips that will impress your friends. Restaurant
              weeks by the numbers. Will mexican food ever rule the world? The
              10 best thai restaurant youtube videos. How restaurant weeks can
              make you sick. The complete beginner's guide to cooking healthy
              food. Unbelievable food stamp success stories. How whole foods
              markets are making the world a better place. 16 things that won't
              happen in dish reviews.
            </p>
          </div>
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
export class FormlyFieldTab extends FieldType {
  isValid(field: FormlyFieldConfig): boolean {
    if (field.key) {
      return field.formControl.valid;
    }
    return field.fieldGroup
      ? field.fieldGroup.every((f) => this.isValid(f))
      : true;
  }
}
