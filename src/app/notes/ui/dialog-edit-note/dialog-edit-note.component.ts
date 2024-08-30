import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormNoteComponent,
  NoteFormValue,
} from '../form-note/form-note.component';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ButtonComponent } from 'src/app/shared/ui/button/button.component';

@Component({
  selector: 'app-dialog-edit-note',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormNoteComponent],
  templateUrl: './dialog-edit-note.component.html',
  styleUrl: './dialog-edit-note.component.scss',
})
export class DialogEditNoteComponent {
  readonly dialogRef = inject(DialogRef);
  readonly dialogData = inject(DIALOG_DATA);

  submit(formValue: NoteFormValue) {
    this.dialogRef.close(formValue);
  }
}
