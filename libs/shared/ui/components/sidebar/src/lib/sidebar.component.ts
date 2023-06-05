import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from './model/menu.model';
import { MenuService } from './service/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  //public appJson: any = packageJson;
  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  // toggleTheme() {
  //   this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  // }
}
