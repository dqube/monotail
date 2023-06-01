/* eslint-disable @angular-eslint/no-host-metadata-property */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

export type ButtonType =
  | 'primary'
  | 'default'
  | 'dashed'
  | 'link'
  | 'text'
  | null;
export type ButtonShape = 'circle' | 'round' | 'solid' | null;
export type ButtonSize = 'large' | 'default' | 'small';
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[tw-button], a[tw-button]',
  exportAs: 'twButton',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./button.component.scss'],
  host: {
    '[class.btn-rounded]':
      `nzType === null` && `nzShape !==null` && `nzShape ==='round'`,
    '[class.btn]': `nzType !== null` || `nzShape ===null`,
    '[class.btn-circle]': `nzShape !== null` && `nzShape ==='circle'`,
    '[class.btn-primary]':
      `nzShape !== null` && `nzShape !=='solid'` && `nzColor ==='primary'`,
    '[class.btn-secondary]':
      `nzShape !== null` && `nzShape !=='solid'` && `nzColor ==='secondary'`,
    '[class.btn-solid-secondary]':
      `nzShape !== null` && `nzShape ==='solid'` && `nzColor ==='secondary'`,
    '[class.btn-solid-success]':
      `nzShape !== null` && `nzShape ==='solid'` && `nzColor ==='success'`,
    '[class.btn-solid-warning]':
      `nzShape !== null` && `nzShape ==='solid'` && `nzColor ==='warning'`,
    '[class.btn-solid-error]':
      `nzShape !== null` && `nzShape ==='solid'` && `nzColor ==='error'`,
    '[attr.disabled]': 'disabled || null',
  },
})
export class ButtonComponent {
  @Input() nzType: ButtonType = 'default';
  @Input() nzShape: ButtonShape = null;
  @Input() nzSize: ButtonSize = 'default';
  @Input() nzColor: ButtonColor = 'primary';
  // @HostBinding('class.btn-primary') public hostClass = true;
  // this.nzType === 'primary';
}
