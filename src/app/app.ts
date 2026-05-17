import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Label } from './Components/label/label';
import { ProgressBar } from './Components/progress-bar/progress-bar';
import { Badge } from './Components/badge/badge';
import { SearchBoxComponent } from './Components/search-box/search-box';
import { Card } from './Components/card/card';
import { Calendar } from './Components/calendar/calendar';
import { FooterUaslp } from './Components/footer-uaslp/footer-uaslp';
import { HeaderUaslp } from './Components/header-uaslp/header-uaslp';
import { HeaderMateria } from './Components/header-materia/header-materia';
import { ActivityForm } from './Components/activity-form/activity-form';
import { MatterForm } from './Components/matter-form/matter-form';
import { ButtonComponent } from './Components/button/button';
import { InputComponent } from './Components/input/input';
import { CalendarCellComponent } from './Components/calendar-cell/calendar-cell';
import { DashboardView } from './Components/dashboard-view/dashboard-view';
import { CellComponent } from './Components/cell/cell';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Label,
    ProgressBar,
    Badge,
    SearchBoxComponent,
    Card,
    Calendar,
    FooterUaslp,
    HeaderUaslp,
    HeaderMateria,
    ActivityForm,
    MatterForm,
    ButtonComponent,
    InputComponent,
    CalendarCellComponent,
    CellComponent,
    DashboardView
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('DisenoDeInterfacesCLPTJCGF');
}