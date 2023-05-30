import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
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
import { SpinnersModule } from '@app/ui/spinners';
import { TableModule } from '@app/ui/table';
import { TextareaModule } from '@app/ui/textarea';
import { UploadModule } from '@app/ui/upload';
@Component({
  selector: 'tw-nx-welcome',
  standalone: true,
  template: `
    <tw-input></tw-input>
    <tw-textarea></tw-textarea>
    <tw-accordion></tw-accordion>
    <tw-alert></tw-alert>
    <tw-button></tw-button>
    <tw-dropdown></tw-dropdown>
    <tw-drawer></tw-drawer>
    <tw-modal></tw-modal>
    <tw-dots></tw-dots>
    <tw-select></tw-select>
    <tw-spinners></tw-spinners>
    <tw-upload></tw-upload>
    <tw-link></tw-link>
    <tw-checkbox></tw-checkbox>
    <tw-radio></tw-radio>
    <tw-table></tw-table>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
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
  ],
})
export class NxWelcomeComponent {}
