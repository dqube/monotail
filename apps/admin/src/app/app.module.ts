import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@app/form/core';
import { FormlyTailwindModule } from '@app/form/tail';
import { SidebarModule } from '@app/ui/sidebar';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ButtonModule} from '@primeng/button'

import { HttpClientModule } from '@angular/common/http';
import { SvgIconModule } from '@app/icon';
import { SharedUiIconPreloaderModule } from '@app/icon/loader';
import { NxWelcomeComponent } from './nx-welcome.component';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    SidebarModule,
    ReactiveFormsModule,
    ButtonModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyTailwindModule,
    HttpClientModule,
    SvgIconModule.forRoot(),
    SharedUiIconPreloaderModule.forRoot({
      configUrl: './assets/json/icons.json',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
