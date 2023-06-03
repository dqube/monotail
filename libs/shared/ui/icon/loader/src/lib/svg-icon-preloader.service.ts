/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { SvgIconRegistryService } from '@app/icon';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { CustomIconData, SharedUiIconImageFile } from './icon.interface';
import { SharedUiIconPreloaderConfig } from './svg-icon-preloader-config.class';

@Injectable({
  providedIn: 'root',
})
export class AngularSvgIconPreloaderService {
  private configUrl: string = './assets/icons.json';
  private iconsFileData!: {
    iconImageFiles: SharedUiIconImageFile[];
    customIcons: CustomIconData[];
  };
  public configSubject: Subject<any> = new Subject<any>();

  constructor(
    private _http: HttpClient,
    @Optional() config: SharedUiIconPreloaderConfig,
    private _iconRegistry: SvgIconRegistryService
  ) {
    if (config && config.configUrl) {
      this.configUrl = config.configUrl;
    }
  }

  loadConfig() {
    const promise = new Promise<void>((resolve, reject) => {
      this._http.get(this.configUrl).subscribe({
        next: (res: any) => {
          this.iconsFileData = res;
          this.loadIcons();
          resolve();
        },
        error: (err: any) => {
          console.error(
            'An error occurred loading the icons:\n',
            err,
            '\nNo icons will be loaded.'
          );
          this.iconsFileData = { customIcons: [], iconImageFiles: [] };
          this.loadIcons();
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }
  loadIcons() {
    this.iconsFileData.iconImageFiles.forEach((i: SharedUiIconImageFile) => {
      this._iconRegistry
        .loadSvg(i.iconPath, i.iconName)
        ?.pipe(take(1))
        .subscribe();
    });
    this.iconsFileData.customIcons.forEach((i: CustomIconData) => {
      this._iconRegistry.addSvg(i.iconName, i.iconData);
    });
  }
}
