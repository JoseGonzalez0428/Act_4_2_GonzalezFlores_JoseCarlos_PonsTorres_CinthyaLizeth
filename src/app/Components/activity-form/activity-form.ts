import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar';

@Component({
  selector: 'app-ui-activity-form',
  standalone: true,
  imports: [ProgressBar],
  templateUrl: './activity-form.html',
  styleUrl: './activity-form.css'
})
export class ActivityForm {
  @Input() title: string = 'Actividad';
  @Input() date: string = 'Fecha';
  @Input() sessionStatus: 'completed' | 'pending' | 'incomplete' | 'active' = 'completed';
  @Input() topic: string = 'Metodología';
  @Input() progress: number = 0;
  @Input() scheduledHours: string = '1';
  @Input() realHours: string = 'Ej. 1';

  @Output() cancelClick = new EventEmitter<void>();
  @Output() acceptClick = new EventEmitter<void>();

  setStatus(status: 'completed' | 'pending' | 'incomplete' | 'active'): void {
    this.sessionStatus = status;
  }

  onCancel(): void {
    this.cancelClick.emit();
  }

  onAccept(): void {
    this.acceptClick.emit();
  }
}