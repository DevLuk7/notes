import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Note } from '../../data-access/notes.store';

@Component({
  selector: 'app-dialog-delete-note',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './dialog-delete-note.component.html',
  styleUrl: './dialog-delete-note.component.scss',
})
export class DialogDeleteNoteComponent {
  readonly dialogRef = inject(DialogRef);
  readonly dialogData = inject(DIALOG_DATA);

  readonly delete = output<Note>();
}
