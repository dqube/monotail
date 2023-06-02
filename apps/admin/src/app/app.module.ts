import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@form/core';
import { FormlyTailwindModule } from '@form/tail';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { NxWelcomeComponent } from './nx-welcome.component';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),

    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyTailwindModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
