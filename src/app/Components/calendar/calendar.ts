import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarCellComponent } from '../calendar-cell/calendar-cell';
import { ButtonComponent } from '../button/button';
import { IconComponent } from '../icon/icon';

type CalendarDay = {
  number: string;
  description: string;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'disabled';
  variant?: 'outline' | 'filled' | 'dark';
};

@Component({
  selector: 'app-ui-calendar',
  standalone: true,
  imports: [CalendarCellComponent,ButtonComponent,IconComponent],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar {
  @Input() days: string[] = [
    'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO'
  ];

  @Output() cellClick = new EventEmitter<any>();

  onCellClick(item: any) {
    this.cellClick.emit(item);
  }

  @Input() items: CalendarDay[] = [
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },

    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },

    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },

    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },

    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },

    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },
    { number: '01', description: 'Description', color: 'blue', variant: 'outline' },

    { number: '01', description: 'Description', color: 'blue', variant: 'outline' }
  ];
}