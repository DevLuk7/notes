import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from 'src/app/shared/ui/input-search/input-search.component';
import { NotesStore } from '../../data-access/notes.store';

@Component({
  selector: 'app-search-note',
  standalone: true,
  imports: [CommonModule, InputSearchComponent],
  templateUrl: './search-note.component.html',
  styleUrl: './search-note.component.scss',
})
export class SearchNoteComponent {
  private readonly notesStore = inject(NotesStore);

  onSearch(search: string) {
    this.notesStore.setSearchByText(search);
  }
}
