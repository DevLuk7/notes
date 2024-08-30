import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from 'src/app/shared/dialog.service';
import { Note, NotesStore } from '../../data-access/notes.store';
import { DialogDeleteNoteComponent } from '../../ui/dialog-delete-note/dialog-delete-note.component';
import { filter } from 'rxjs';
import { IconComponent } from 'src/app/shared/ui/icon/icon.component';
import { CardComponent } from 'src/app/shared/ui/card/card.component';
import { ButtonComponent } from 'src/app/shared/ui/button/button.component';
import { DialogEditNoteComponent } from '../../ui/dialog-edit-note/dialog-edit-note.component';

@Component({
  selector: 'app-card-note',
  standalone: true,
  imports: [CommonModule, IconComponent, CardComponent, ButtonComponent],
  templateUrl: './card-note.component.html',
  styleUrl: './card-note.component.scss',
})
export class CardNoteComponent {
  readonly dialog = inject(DialogService);
  readonly notesStore = inject(NotesStore);

  readonly note = input.required<Note>();

  showDeleteModal(note: Note) {
    const dialogRef = this.dialog.open(DialogDeleteNoteComponent, {
      data: { note },
    });

    dialogRef.closed.pipe(filter((x) => !!x)).subscribe((note) => {
      this.notesStore.removeNote((note as Note).id);
    });
  }

  showEditModal(note: Note) {
    const dialogRef = this.dialog.open(DialogEditNoteComponent, {
      data: { note },
    });

    dialogRef.closed.pipe(filter((x) => !!x)).subscribe((note) => {
      this.notesStore.updateNote(note as Note);
    });
  }
}
