import { Component, inject } from '@angular/core';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-header',
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openDrawer() {}
}
