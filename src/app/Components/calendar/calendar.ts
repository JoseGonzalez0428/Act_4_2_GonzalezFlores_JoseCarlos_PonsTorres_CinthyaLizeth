import { Component, Input } from '@angular/core';

type CalendarDay = {
  number: string;
  description: string;
};

@Component({
  selector: 'app-ui-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar {
  @Input() days: string[] = [
    'LUNES',
    'MARTES',
    'MIERCOLES',
    'JUEVES',
    'VIERNES',
    'SABADO',
    'DOMINGO'
  ];

  @Input() items: CalendarDay[] = [
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },

    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },

    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },

    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },

    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },

    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },
    { number: '01', description: 'Description' },

    { number: '01', description: 'Description' }
  ];
}