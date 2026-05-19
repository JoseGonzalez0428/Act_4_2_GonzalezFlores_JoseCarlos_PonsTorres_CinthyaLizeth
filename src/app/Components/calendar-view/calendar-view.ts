import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderUaslp } from '../header-uaslp/header-uaslp';
import { FooterUaslp } from '../footer-uaslp/footer-uaslp';
import { HeaderMateria } from '../header-materia/header-materia';
import { Calendar } from '../calendar/calendar';
import { CalendarCellComponent } from '../calendar-cell/calendar-cell';
import { IconComponent } from '../icon/icon';
import { ActivityForm } from '../activity-form/activity-form';
import { ProgressBar } from '../progress-bar/progress-bar';
import { Badge } from '../badge/badge';


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
    IconComponent,
    ActivityForm,
    ProgressBar,
    Badge
  ],
  templateUrl: './calendar-view.html',
  styleUrl: './calendar-view.css'
})
export class CalendarViewComponent {
  showActivityForm: boolean = false;
  selectedCell: any = null;

  @ViewChild(Calendar) calendarRef!: Calendar;

  materiaTitle: string = 'Estructura de datos';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state) {
      this.materiaTitle = nav.extras.state['title'];
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  openActivityForm(cell?: any) {
    this.selectedCell = cell;
    this.showActivityForm = true;
  }

  closeActivityForm() {
    this.showActivityForm = false;
    this.selectedCell = null;
  }

  resumen = {
    green: 0,
    yellow: 0,
    red: 0,
    blue: 0
  };

  acceptActivityForm(data?: { color: 'blue' | 'green' | 'yellow' | 'red', topic: string, realHours: number }) {
    if (this.selectedCell && data) {
      // quita horas anteriores del resumen
      const prevColor = this.selectedCell.color as 'blue' | 'green' | 'yellow' | 'red';
      if (this.selectedCell.topic) {
        this.resumen[prevColor] -= this.selectedCell.realHours;
      }

      // actualiza la celda
      this.selectedCell.color = data.color;
      this.selectedCell.variant = 'outline';
      this.selectedCell.description = data.topic || 'Sin tema';
      this.selectedCell.topic = data.topic;
      this.selectedCell.realHours = data.realHours;

      // suma al resumen
      this.resumen[data.color] += data.realHours;
    }
    this.showActivityForm = false;
    this.selectedCell = null;
  }
}