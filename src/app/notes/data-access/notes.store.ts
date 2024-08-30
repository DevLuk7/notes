import { computed, effect, inject, PLATFORM_ID } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

export interface Note {
  id: string;
  title: string;
  body: string;
  date: Date;
}

export type AddNewNote = Pick<Note, 'title' | 'body'>;
export type UpdateExitingNote = Pick<Note, 'id' | 'title' | 'body'>;

const localStorageKey = 'notes';

type NotesState = {
  notes: Note[];
  isLoaded: boolean;
  searchByText: string;
};

const initialState: NotesState = {
  notes: [],
  isLoaded: false,
  searchByText: '',
};

export const NotesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ notes, searchByText }) => ({
    filteredNotes: computed(() =>
      notes().filter((note) =>
        `${note.title}${note.body}`.includes(searchByText())
      )
    ),
    areNotes: computed(() => notes().length > 0),
  })),
  withHooks({
    onInit(store) {
      const platformId = inject(PLATFORM_ID);
      const localStorageService = inject(LocalStorageService);

      if (platformId === 'browser') {
        let notes: Note[];
        try {
          notes = localStorageService
            .get(localStorageKey)
            .map((note: Note) => ({
              ...note,
              date: new Date(note.date),
            }));
        } catch {
          notes = [];
        }
        patchState(store, { notes, isLoaded: true });
        effect(() => {
          localStorageService.set(localStorageKey, store.notes());
        });
      }
    },
  }),
  withMethods((store) => ({
    addNote(note: AddNewNote): void {
      patchState(store, (state) => ({
        notes: [
          ...state.notes,
          { ...note, id: crypto.randomUUID(), date: new Date() },
        ],
      }));
    },
    removeNote(id: string): void {
      patchState(store, (state) => ({
        notes: state.notes.filter((note) => note.id !== id),
      }));
    },
    updateNote(note: UpdateExitingNote): void {
      patchState(store, (state) => ({
        notes: state.notes.map((n) =>
          n.id === note.id ? { ...n, ...note } : n
        ),
      }));
    },
    setSearchByText(search: string): void {
      patchState(store, { searchByText: search });
    },
    swapNotes(droppedIdx: number, targetIdx: number): void {
      patchState(store, (state) => {
        const notes = [...state.notes];
        [notes[droppedIdx], notes[targetIdx]] = [
          notes[targetIdx],
          notes[droppedIdx],
        ];
        return {
          notes,
        };
      });
    },
  }))
);
