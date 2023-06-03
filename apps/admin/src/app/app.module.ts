import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@app/layout/sidebar';
import { FormlyModule } from '@form/core';
import { FormlyTailwindModule } from '@form/tail';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { SvgIconModule } from '@app/icon';
import { IconPreloaderModule } from '@app/icon/loader';
import { NxWelcomeComponent } from './nx-welcome.component';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    SidebarModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyTailwindModule,
    HttpClientModule,
    SvgIconModule.forRoot(),
    IconPreloaderModule.forRoot({
      configUrl: './assets/json/icons.json',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
