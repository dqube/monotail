import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '@app/ui/navbar';
import { SidebarModule } from '@app/ui/sidebar';
import { ClassicLayoutComponent } from './classic.component';

@NgModule({
  imports: [CommonModule, RouterModule, SidebarModule, NavbarModule],
  declarations: [ClassicLayoutComponent],
  exports: [ClassicLayoutComponent],
})
export class ClassicLayoutModule {}
