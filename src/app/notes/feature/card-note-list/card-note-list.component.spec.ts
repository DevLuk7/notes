import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardNoteListComponent } from './card-note-list.component';

describe('CardNoteListComponent', () => {
  let component: CardNoteListComponent;
  let fixture: ComponentFixture<CardNoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNoteListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
