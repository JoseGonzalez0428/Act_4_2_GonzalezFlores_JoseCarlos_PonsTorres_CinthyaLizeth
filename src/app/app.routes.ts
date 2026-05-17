import { Routes } from '@angular/router';
import { DashboardView } from './Components/dashboard-view/dashboard-view';
import { CalendarViewComponent } from './Components/calendar-view/calendar-view';
import { PreviewView } from './Components/preview-view/preview-view';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardView },
  { path: 'calendario', component: CalendarViewComponent },
  { path: 'preview', component: PreviewView },
];