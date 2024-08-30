import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './notes/ui/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { SearchNoteComponent } from './notes/feature/search-note/search-note.component';
import { CardNoteListComponent } from './notes/feature/card-note-list/card-note-list.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavbarComponent,
    SearchNoteComponent,
    CardNoteListComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
