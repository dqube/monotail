import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { SharedUiIconPreloaderConfig } from './svg-icon-preloader-config.class';
import { AngularSvgIconPreloaderService } from './svg-icon-preloader.service';

export function initConfig(svgSvc: AngularSvgIconPreloaderService) {
  return () => svgSvc.loadConfig();
}

@NgModule({
  imports: [CommonModule],
  providers: [
    AngularSvgIconPreloaderService,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AngularSvgIconPreloaderService],
      multi: true,
    },
  ],
})
export class SharedUiIconPreloaderModule {
  static forRoot(
    config: SharedUiIconPreloaderConfig
  ): ModuleWithProviders<SharedUiIconPreloaderModule> {
    return {
      ngModule: SharedUiIconPreloaderModule,
      providers: [
        {
          provide: SharedUiIconPreloaderConfig,
          useValue: config,
        },
        AngularSvgIconPreloaderService,
      ],
    };
  }
}
