import { Component, HostBinding, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button, button[app-button]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  readonly buttonType = input<'primary' | 'secondary' | 'cancel'>('primary');

  @HostBinding('class') get class() {
    return this.buttonType();
  }
}
