import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class Badge {
  @Input() label: string = 'BADGE';
  @Input() color: 'blue' | 'green' | 'yellow' | 'red' | 'disabled' = 'blue';
  @Input() variant: 'outline' | 'filled' = 'outline';
}
