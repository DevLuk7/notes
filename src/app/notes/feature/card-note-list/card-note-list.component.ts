import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesStore } from '../../data-access/notes.store';
import { CardNoteComponent } from '../card-note/card-note.component';
import { DraggableDirective } from 'src/app/shared/draggable.directive';
import { NoNotesInfoComponent } from '../../ui/no-notes-info/no-notes-info.component';
import { AddNewNoteComponent } from '../add-new-note/add-new-note.component';
import { AddNewNoteService } from '../add-new-note/add-new-note.service';

@Component({
  selector: 'app-card-note-list',
  standalone: true,
  imports: [
    CommonModule,
    CardNoteComponent,
    DraggableDirective,
    NoNotesInfoComponent,
    AddNewNoteComponent,
  ],
  templateUrl: './card-note-list.component.html',
  styleUrl: './card-note-list.component.scss',
})
export class CardNoteListComponent {
  private readonly notesStore = inject(NotesStore);
  readonly showForm = inject(AddNewNoteService).showForm;
  readonly isLoaded = this.notesStore.isLoaded;

  readonly notes = this.notesStore.filteredNotes;
  readonly areNotes = this.notesStore.areNotes;

  onDrop(droppedIdx: number, targetIdx: number) {
    this.notesStore.swapNotes(droppedIdx, targetIdx);
  }
}
