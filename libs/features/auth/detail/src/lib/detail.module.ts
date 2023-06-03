import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component';
import { detailRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(detailRoutes)],
  declarations: [DetailComponent],
  exports: [DetailComponent],
})
export class DetailModule {}
