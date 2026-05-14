import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell.html',
  styleUrl: './cell.css'
})
export class CellComponent {
  @Input() text: string = 'Texto';
  @Input() color: 'blue' | 'green' | 'yellow' | 'red' | 'disabled' = 'blue';
  @Input() variant: 'outline' | 'filled' = 'outline';
}