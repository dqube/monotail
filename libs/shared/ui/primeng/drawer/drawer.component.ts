/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/component-selector */
import { trigger } from '@angular/animations';
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

import { DrawerDirection } from './drawer-direction.enum';
import { DrawerPosition } from './drawer-position.enum';
import { DRAWER_ANIMATION } from './drawer.animation';

@Component({
  exportAs: 'ngxDrawer',
  selector: 'ngx-drawer',
  templateUrl: 'drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [trigger('drawerTransition', DRAWER_ANIMATION)],
  host: {
    role: 'dialog',
    tabindex: '-1',
    '[class]': 'cssClasses',
    '[style.width]': 'widthSize',
    '[style.height]': 'heightSize',
    '[style.zIndex]': 'zIndex',
    '[style.position]': 'position',
    '[@drawerTransition]': 'direction',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent implements OnInit, OnDestroy {
  @Input() cssClass = '';
  @Input() direction: DrawerDirection;
  @Input() template: TemplateRef<any>;
  @Input() context: any;
  @Input() isRoot = true;

  @Input()
  get size() {
    return this._size;
  }
  set size(val: number) {
    this._size = coerceNumberProperty(val);
  }

  @Input()
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(val: number) {
    this._zIndex = coerceNumberProperty(val);
  }

  @Input()
  get closeOnOutsideClick() {
    return this._closeOnOutsideClick;
  }
  set closeOnOutsideClick(val: boolean) {
    this._closeOnOutsideClick = coerceBooleanProperty(val);
  }

  @Output() close = new EventEmitter<boolean>();

  get cssClasses(): string {
    let clz = `ngx-drawer ${this.cssClass}`;
    if (this.isLeft) clz += ' left-drawer';
    if (this.isBottom) clz += ' bottom-drawer';
    return clz;
  }

  widthSize: string | number;
  heightSize: string | number;
  position: DrawerPosition = DrawerPosition.fixed;

  private get isLeft(): boolean {
    return this.direction === DrawerDirection.Left;
  }

  private get isBottom(): boolean {
    return this.direction === DrawerDirection.Bottom;
  }

  private _size: number;
  private _zIndex: number;
  private _closeOnOutsideClick: boolean;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    this.position = this.isRoot
      ? DrawerPosition.fixed
      : DrawerPosition.absolute;
    this.setDimensions(this.size);
    this.elementRef.nativeElement.focus();
  }

  ngOnDestroy() {
    this.close.emit(true);
  }

  setDimensions(size: number): void {
    this.heightSize = `${this.isBottom && size ? size : 100}%`;
    this.widthSize = `${this.isLeft && size ? size : 100}%`;
  }

  @HostListener('keyup.esc')
  onEscapeKey(): void {
    this.close.emit(true);
  }
}
