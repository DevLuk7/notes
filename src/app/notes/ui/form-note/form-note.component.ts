import { Component, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'src/app/shared/ui/input/input.component';
import { ButtonComponent } from 'src/app/shared/ui/button/button.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from 'src/app/shared/ui/textarea/textarea.component';

export type NoteForm = ReturnType<typeof createNoteForm>;

export type NoteFormValue = ReturnType<
  ReturnType<typeof createNoteForm>['getRawValue']
>;

const createNoteForm = () =>
  new FormGroup({
    id: new FormControl<string | null>(null),
    title: new FormControl('Untitled Note', { nonNullable: true }),
    body: new FormControl('', { nonNullable: true }),
  });

@Component({
  selector: 'app-form-note',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
  ],
  templateUrl: './form-note.component.html',
  styleUrl: './form-note.component.scss',
})
export class FormNoteComponent implements OnInit {
  readonly initialValue = input<NoteFormValue>();
  readonly submitButtonText = input<string>('Add');
  readonly submitForm = output<NoteFormValue>();

  readonly form = createNoteForm();

  ngOnInit() {
    const initialValue = this.initialValue();
    if (initialValue) {
      this.form.patchValue(initialValue);
    }
  }

  onSubmit() {
    this.submitForm.emit(this.form.getRawValue());
  }
}
