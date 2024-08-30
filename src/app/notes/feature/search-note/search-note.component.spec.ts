import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchNoteComponent } from './search-note.component';

describe('SearchNoteComponent', () => {
  let component: SearchNoteComponent;
  let fixture: ComponentFixture<SearchNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
