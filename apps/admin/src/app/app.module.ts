import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AccordionModule } from '@app/ui/accordion';
import { AlertModule } from '@app/ui/alert';
import { ButtonModule } from '@app/ui/button';
import { CheckboxModule } from '@app/ui/checkbox';
import { DotsModule } from '@app/ui/dots';
import { DrawerModule } from '@app/ui/drawer';
import { DropdownModule } from '@app/ui/dropdown';
import { InputModule } from '@app/ui/input';
import { LinkModule } from '@app/ui/link';
import { ModalModule } from '@app/ui/modal';
import { RadioModule } from '@app/ui/radio';
import { SelectModule } from '@app/ui/select';
import { SidebarModule } from '@app/ui/sidebar';
import { SpinnersModule } from '@app/ui/spinners';
import { TableModule } from '@app/ui/table';
import { TextareaModule } from '@app/ui/textarea';
import { UploadModule } from '@app/ui/upload';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { NxWelcomeComponent } from './nx-welcome.component';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AlertModule,
    ButtonModule,
    AccordionModule,
    DropdownModule,
    DrawerModule,
    ModalModule,
    InputModule,
    TextareaModule,
    DotsModule,
    SelectModule,
    SpinnersModule,
    UploadModule,
    LinkModule,
    CheckboxModule,
    RadioModule,
    TableModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
