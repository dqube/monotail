import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InjectionService } from './injection.service';

import { DrawerComponent } from './drawer.component';

@NgModule({
  declarations: [DrawerComponent],
  exports: [DrawerComponent],
  providers: [InjectionService],
  imports: [CommonModule],
})
export class DrawerModule {}
