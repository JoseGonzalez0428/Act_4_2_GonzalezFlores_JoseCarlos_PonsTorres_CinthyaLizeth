import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class Badge {
  @Input() label: string = 'BADGE';
  @Input() color: 'blue' | 'green' | 'yellow' | 'red' | 'disabled' = 'blue';
  @Input() variant: 'outline' | 'filled' = 'outline';
  @Input() icon: string = 'info';
  @Input() height: string = 'auto';
}