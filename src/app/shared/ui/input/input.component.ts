import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input, input[app-input]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  host: {
    class:
      'block w-full py-2 px-3 text-gray-900 border border-gray-300 rounded-lg bg-input-default focus:ring-blue-500 focus:border-blue-500 hover:bg-input-hover focus:bg-input-active active:bg-input-active',
  },
})
export class InputComponent {
  readonly label = input<string>('');
  readonly placeholder = input<string>('');
  readonly rightIcon = input<string>('');
}
