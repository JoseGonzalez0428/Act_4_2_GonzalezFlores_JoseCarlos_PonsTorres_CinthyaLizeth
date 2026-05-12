import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-header-materia',
  standalone: true,
  imports: [],
  templateUrl: './header-materia.html',
  styleUrl: './header-materia.css'
})
export class HeaderMateria {
  @Input() title: string = 'Title';
  @Input() semester: string = 'Semestre-2026/1';
  @Input() group: string = 'Grupo-2026';
  @Input() showBackButton: boolean = true;

  @Output() backClick = new EventEmitter<void>();

  onBackClick(): void {
    this.backClick.emit();
  }
}
