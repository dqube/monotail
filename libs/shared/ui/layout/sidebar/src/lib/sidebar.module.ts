import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconModule } from '@app/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  imports: [CommonModule, SvgIconModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
})
export class SidebarModule {}
