import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/ui/button/button.component';
import {
  FormNoteComponent,
  NoteFormValue,
} from '../form-note/form-note.component';

@Component({
  selector: 'app-form-add-note',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FormNoteComponent,
    FormNoteComponent,
  ],
  templateUrl: './form-add-note.component.html',
  styleUrl: './form-add-note.component.scss',
})
export class FormAddNoteComponent {
  readonly cancel = output();
  readonly addNote = output<NoteFormValue>();

  submit(formValue: NoteFormValue) {
    this.addNote.emit(formValue);
    this.cancel.emit();
  }
}
