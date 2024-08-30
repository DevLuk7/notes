import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/ui/button/button.component';
import { IconComponent } from 'src/app/shared/ui/icon/icon.component';

@Component({
  selector: 'app-no-notes-info',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent],
  templateUrl: './no-notes-info.component.html',
  styleUrl: './no-notes-info.component.scss',
})
export class NoNotesInfoComponent {
  readonly areNotes = input();
  readonly addNewNote = output();
}
