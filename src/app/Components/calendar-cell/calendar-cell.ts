import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-calendar-cell',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './calendar-cell.html',
  styleUrl: './calendar-cell.css'
})
export class CalendarCellComponent {
  @Input() number: string = '01';
  @Input() description: string = 'Description';
  @Input() color: 'blue' | 'green' | 'yellow' | 'red' | 'disabled' = 'blue';
  @Input() variant: 'outline' | 'filled' | 'dark' = 'outline';
}