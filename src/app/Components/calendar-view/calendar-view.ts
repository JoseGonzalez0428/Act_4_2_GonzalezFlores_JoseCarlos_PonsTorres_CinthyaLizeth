import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUaslp } from '../header-uaslp/header-uaslp';
import { FooterUaslp } from '../footer-uaslp/footer-uaslp';
import { HeaderMateria } from '../header-materia/header-materia';
import { Calendar } from '../calendar/calendar';
import { CalendarCellComponent } from '../calendar-cell/calendar-cell';
import { Badge } from '../badge/badge';
import { ButtonComponent } from '../button/button';
import { ActivityForm } from '../activity-form/activity-form';
import { Label } from '../label/label';

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [
    CommonModule,
    HeaderUaslp,
    FooterUaslp,
    HeaderMateria,
    Calendar,
    CalendarCellComponent,
    Badge,
    ButtonComponent,
    Label,
    ActivityForm
  ],
  templateUrl: './calendar-view.html',
  styleUrl: './calendar-view.css'
})
export class CalendarViewComponent {
  showActivityForm: boolean = false;
  selectedCell: any = null;

  resumenCells = [
    { number: '80', color: 'green', variant: 'filled' },
    { number: '01', color: 'yellow', variant: 'filled' },
    { number: '02', color: 'red', variant: 'filled' },
    { number: '00', color: 'blue', variant: 'filled' },
  ];

  openActivityForm(cell: any) {
    this.selectedCell = cell;
    this.showActivityForm = true;
  }

  closeActivityForm() {
    this.showActivityForm = false;
    this.selectedCell = null;
  }

  acceptActivityForm() {
    this.showActivityForm = false;
    this.selectedCell = null;
  }
}