import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderUaslp } from '../header-uaslp/header-uaslp';
import { FooterUaslp } from '../footer-uaslp/footer-uaslp';
import { HeaderMateria } from '../header-materia/header-materia';
import { Calendar } from '../calendar/calendar';
import { CalendarCellComponent } from '../calendar-cell/calendar-cell';
import { Badge } from '../badge/badge';
import { IconComponent } from '../icon/icon';
import { ActivityForm } from '../activity-form/activity-form';
import { ProgressBar } from '../progress-bar/progress-bar';
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
    IconComponent,
    ActivityForm,
    ProgressBar,Label
  ],
  templateUrl: './calendar-view.html',
  styleUrl: './calendar-view.css'
})
export class CalendarViewComponent {
  showActivityForm: boolean = false;

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  openActivityForm() {
    this.showActivityForm = true;
  }

  closeActivityForm() {
    this.showActivityForm = false;
  }

  acceptActivityForm() {
    this.showActivityForm = false;
  }
}