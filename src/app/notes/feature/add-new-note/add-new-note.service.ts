import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AddNewNoteService {
  readonly showForm = signal<boolean>(false);
}
