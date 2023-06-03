import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@app/ui/sidebar';
import { ClassicLayoutComponent } from './classic.component';

@NgModule({
  imports: [CommonModule, RouterModule, SidebarModule],
  declarations: [ClassicLayoutComponent],
  exports: [ClassicLayoutComponent],
})
export class ClassicLayoutModule {}
