import { NgModule } from '@angular/core';
import { FORMLY_CONFIG, FormlyConfig, FormlyModule } from '@app/form/core';
import { registerLibraryConfigReplacementExtension } from './preset-substitution.extension';

@NgModule({
  imports: [FormlyModule.forChild({})],
  providers: [
    {
      provide: FORMLY_CONFIG,
      useFactory: registerLibraryConfigReplacementExtension,
      deps: [FormlyConfig],
      multi: true,
    },
  ],
})
export class FormlyPresetModule {}
