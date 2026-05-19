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
  @Input() realHours: number = 0;

  @Output() cancelClick = new EventEmitter<void>();
  @Output() acceptClick = new EventEmitter<{
    color: 'blue' | 'green' | 'yellow' | 'red';
    topic: string;
    realHours: number;
  }>();

  onAccept(): void {
    const colorMap: Record<string, 'blue' | 'green' | 'yellow' | 'red'> = {
      'completed': 'green',
      'pending': 'yellow',
      'incomplete': 'red',
      'active': 'blue'
    };
    this.acceptClick.emit({
      color: colorMap[this.sessionStatus],
      topic: this.topic,
      realHours: this.realHours
    });
  }
  setStatus(status: 'completed' | 'active' | 'incomplete' | 'pending'): void {
    this.sessionStatus = status;
  }

  onCancel(): void {
    this.cancelClick.emit();
  }

}