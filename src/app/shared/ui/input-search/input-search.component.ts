import { Component, OnDestroy, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [CommonModule, InputComponent, IconComponent, ReactiveFormsModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent implements OnInit, OnDestroy {
  readonly search = output<string>();

  readonly control = new FormControl();
  private sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.control.valueChanges
      .pipe(debounceTime(200))
      .subscribe((value) => {
        this.search.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
