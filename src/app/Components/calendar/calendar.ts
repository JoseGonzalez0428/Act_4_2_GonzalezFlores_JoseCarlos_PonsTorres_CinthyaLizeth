import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarCellComponent } from '../calendar-cell/calendar-cell';
import { ButtonComponent } from '../button/button';

type CalendarDay = {
  number: string;
  description: string;
  color: 'blue' | 'green' | 'yellow' | 'red' | 'disabled';
  variant: 'outline' | 'filled' | 'dark';
  isHovered: boolean;
  topic: string;
  realHours: number;
};

@Component({
  selector: 'app-ui-calendar',
  standalone: true,
  imports: [CommonModule, CalendarCellComponent, ButtonComponent],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar {
  @Input() days: string[] = [
    'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO'
  ];

  @Output() cellClick = new EventEmitter<any>();

  items: CalendarDay[] = Array.from({ length: 31 }, (_, i) => ({
    number: String(i + 1).padStart(2, '0'),
    description: 'Sin tema',
    color: 'blue',
    variant: 'outline',
    isHovered: false,
    topic: '',
    realHours: 0
  }));

  onCellClick(item: CalendarDay) {
    this.cellClick.emit(item);
  }

  onCellHover(item: CalendarDay) {
    item.isHovered = true;
  }

  onCellLeave(item: CalendarDay) {
    item.isHovered = false;
  }

  updateCellColor(number: string, color: 'blue' | 'green' | 'yellow' | 'red' | 'disabled') {
    const cell = this.items.find(i => i.number === number);
    if (cell) cell.color = color;
  }

  
}