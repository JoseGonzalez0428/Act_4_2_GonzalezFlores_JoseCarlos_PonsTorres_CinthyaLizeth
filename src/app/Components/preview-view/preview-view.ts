import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Label } from '../label/label';
import { ProgressBar } from '../progress-bar/progress-bar';
import { Badge } from '../badge/badge';
import { SearchBoxComponent } from '../search-box/search-box';
import { Card } from '../card/card';
import { Calendar } from '../calendar/calendar';
import { FooterUaslp } from '../footer-uaslp/footer-uaslp';
import { HeaderMateria } from '../header-materia/header-materia';
import { HeaderUaslp } from '../header-uaslp/header-uaslp';
import { ActivityForm } from '../activity-form/activity-form';
import { MatterForm } from '../matter-form/matter-form';
import { ButtonComponent } from '../button/button';
import { InputComponent } from '../input/input';
import { CalendarCellComponent } from '../calendar-cell/calendar-cell';
import { CellComponent } from '../cell/cell';
import { DashboardView } from '../dashboard-view/dashboard-view';
import { CalendarViewComponent } from "../calendar-view/calendar-view";

@Component({
  selector: 'preview-view',
  imports: [
    RouterOutlet,
    Label,
    ProgressBar,
    Badge,
    SearchBoxComponent,
    Card,
    Calendar,
    FooterUaslp,
    HeaderMateria,
    HeaderUaslp,
    ActivityForm,
    MatterForm,
    ButtonComponent,
    InputComponent,
    CalendarCellComponent,
    CellComponent,
    DashboardView,
    CalendarViewComponent
],
  templateUrl: './preview-view.html',
  styleUrl: './preview-view.css'
})

export class PreviewView {
  protected readonly title = signal('DisenoDeInterfacesCLPTJCGF');
}