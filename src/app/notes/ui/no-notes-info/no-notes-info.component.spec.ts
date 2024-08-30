import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoNotesInfoComponent } from './no-notes-info.component';

describe('NoNotesInfoComponent', () => {
  let component: NoNotesInfoComponent;
  let fixture: ComponentFixture<NoNotesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoNotesInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoNotesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
