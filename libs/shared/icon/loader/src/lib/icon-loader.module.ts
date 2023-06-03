import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { IconPreloaderConfig } from './svg-icon-preloader-config.class';
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
export class IconPreloaderModule {
  static forRoot(
    config: IconPreloaderConfig
  ): ModuleWithProviders<IconPreloaderModule> {
    return {
      ngModule: IconPreloaderModule,
      providers: [
        {
          provide: IconPreloaderConfig,
          useValue: config,
        },
        AngularSvgIconPreloaderService,
      ],
    };
  }
}
