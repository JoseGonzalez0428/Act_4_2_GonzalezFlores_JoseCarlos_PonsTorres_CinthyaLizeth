import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './cell.html',
  styleUrl: './cell.css'
})
export class CellComponent {
  @Input() number: string = '01';
  @Input() description: string = 'Description';
  @Input() color: 'blue' | 'green' | 'yellow' | 'red' | 'disabled' = 'blue';
  @Input() variant: 'outline' | 'filled' | 'dark' = 'outline';
}