import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddNoteComponent } from '../../ui/form-add-note/form-add-note.component';
import { NotesStore } from '../../data-access/notes.store';
import { NoteFormValue } from '../../ui/form-note/form-note.component';
import { ButtonComponent } from 'src/app/shared/ui/button/button.component';
import { AddNewNoteService } from './add-new-note.service';

@Component({
  selector: 'app-add-new-note',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormAddNoteComponent],
  templateUrl: './add-new-note.component.html',
  styleUrl: './add-new-note.component.scss',
})
export class AddNewNoteComponent implements OnInit {
  private readonly notesStore = inject(NotesStore);
  private readonly addNewNoteService = inject(AddNewNoteService);

  readonly initShowForm = input(false);

  showForm = this.addNewNoteService.showForm;

  ngOnInit(): void {
    if (this.initShowForm()) {
      this.showForm.set(true);
    }
  }

  addNote(note: NoteFormValue) {
    this.notesStore.addNote(note);
  }
}
