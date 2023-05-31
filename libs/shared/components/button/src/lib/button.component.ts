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
export type ButtonShape = 'circle' | 'round' | null;
export type ButtonSize = 'large' | 'default' | 'small';
export type ButtonColor = 'large' | 'default' | 'small';
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
    class: 'btn',
    '[class.btn-primary]': `nzType === 'primary'`,
    '[class.btn-secondary]': `nzType === 'secondary'`,
    '[class.ant-btn-dashed]': `nzType === 'dashed'`,
    '[class.ant-btn-link]': `nzType === 'link'`,
    '[class.ant-btn-text]': `nzType === 'text'`,
    '[class.ant-btn-circle]': `nzShape === 'circle'`,
    '[class.ant-btn-round]': `nzShape === 'round'`,
    '[class.ant-btn-lg]': `nzSize === 'large'`,
    '[class.ant-btn-sm]': `nzSize === 'small'`,
    '[attr.disabled]': 'disabled || null',
  },
})
export class ButtonComponent {
  @Input() nzType: ButtonType = 'default';
  @Input() nzShape: ButtonShape = null;
  @Input() nzSize: ButtonSize = 'default';
  @Input() nzColor: ButtonColor = 'default';
  // @HostBinding('class.btn-primary') public hostClass = true;
  // this.nzType === 'primary';
}
