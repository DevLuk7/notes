import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
  output,
} from '@angular/core';

@Directive({
  selector: '[appDraggable]',
  standalone: true,
})
export class DraggableDirective<T> implements OnInit {
  readonly appDraggable = input<T>();
  readonly onDragStart = output<T>();
  readonly onDragEnd = output();
  readonly onDrop = output<T>();

  private readonly el = inject(ElementRef);

  ngOnInit(): void {
    this.el.nativeElement.draggable = true;
  }

  @HostListener('dragstart', ['$event'])
  handleDragStart(event: DragEvent) {
    this.onDragStart.emit(this.appDraggable() as T);
    event.dataTransfer?.setData(
      'text/plain',
      JSON.stringify(this.appDraggable())
    );
    // setTimeout(() => this.el.nativeElement.classList.add('invisible'), 0);
  }

  @HostListener('dragover', ['$event'])
  handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  @HostListener('dragenter', ['$event'])
  handleDragEnter(event: DragEvent) {
    event.preventDefault();
    this.el.nativeElement.classList.add('over');
  }

  @HostListener('dragleave', ['$event'])
  handleDragLeave() {
    this.el.nativeElement.classList.remove('over');
  }

  @HostListener('drop', ['$event'])
  handleDrop(event: DragEvent) {
    event.preventDefault();
    this.el.nativeElement.classList.remove('over');
    const data = event.dataTransfer?.getData('text/plain');
    if (data) {
      this.onDrop.emit(JSON.parse(data));
    }
  }

  @HostListener('dragend')
  handleDragEnd() {
    this.el.nativeElement.classList.remove('invisible');
    this.onDragEnd.emit();
  }
}
