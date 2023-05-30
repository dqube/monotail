import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@app/ui/sidebar';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SidebarModule],
  selector: 'tw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tailwind';
}
