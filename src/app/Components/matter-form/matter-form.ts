import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-matter-form',
  standalone: true,
  imports: [],
  templateUrl: './matter-form.html',
  styleUrl: './matter-form.css'
})
export class MatterForm {
  @Input() title: string = 'Materia';
  @Input() date: string = 'Fecha';
  @Input() matterName: string = 'Ej. Pensamiento algoritmico';
  @Input() groupName: string = 'Ej. 2026';

  @Output() cancelClick = new EventEmitter<void>();
  @Output() acceptClick = new EventEmitter<void>();

  onCancel(): void {
    this.cancelClick.emit();
  }

  onAccept(): void {
    this.acceptClick.emit();
  }
}
