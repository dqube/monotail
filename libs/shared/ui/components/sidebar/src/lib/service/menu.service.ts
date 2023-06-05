/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MenuItem, SubMenuItem } from '../model/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService implements OnDestroy {
  private _showSidebar$ = new BehaviorSubject<boolean>(true);
  private _showMobileMenu$ = new BehaviorSubject<boolean>(false);
  public _pagesMenu$ = new BehaviorSubject<MenuItem[]>([]);
  private subscription = new Subscription();

  constructor(private router: Router) {
    /** Set dynamic menu */
    // this._pagesMenu$.next(Menu.pages);

    const sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        /** Expand menu base on active route */
        this._pagesMenu$.forEach((menuItem) => {
          menuItem.forEach((menu) => {
            console.log('menu');
            console.log(menu);
            let activeGroup = false;
            menu.items.forEach((subMenu) => {
              console.log('sub-menu');
              console.log(subMenu);
              const active = this.isActive(subMenu.route);
              console.log(active);
              subMenu.expanded = active;
              subMenu.active = active;
              if (active) activeGroup = true;
              if (subMenu.children) {
                this.expand(subMenu.children);
              }
            });
            menu.active = activeGroup;
          });
        });
      }
    });

    this.subscription.add(sub);
  }

  get showSideBar$() {
    return this._showSidebar$.asObservable();
  }
  get showMobileMenu$() {
    return this._showMobileMenu$.asObservable();
  }
  get pagesMenu$() {
    return this._pagesMenu$.asObservable();
  }

  set showSideBar(value: boolean) {
    this._showSidebar$.next(value);
  }
  set showMobileMenu(value: boolean) {
    this._showMobileMenu$.next(value);
  }
  public loadMenus(items: MenuItem[]) {
    console.log(items);
    this._pagesMenu$.next(items);
  }
  public toggleSidebar() {
    this._showSidebar$.next(!this._showSidebar$.value);
  }

  public toggleMenu(menu: any) {
    console.log(menu);
    this.showSideBar = true;
    menu.expanded = !menu.expanded;
  }

  public toggleSubMenu(submenu: SubMenuItem) {
    submenu.expanded = !submenu.expanded;
  }

  private expand(items: Array<any>) {
    console.log(items);
    items.forEach((item) => {
      item.expanded = this.isActive(item.route);
      if (item.children) this.expand(item.children);
    });
  }

  private isActive(instruction: any): boolean {
    return this.router.isActive(this.router.createUrlTree([instruction]), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
