import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAddNoteComponent } from './form-add-note.component';

describe('FormAddNoteComponent', () => {
  let component: FormAddNoteComponent;
  let fixture: ComponentFixture<FormAddNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormAddNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
