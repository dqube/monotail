import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { shellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(shellRoutes)],
})
export class ShellModule {}
