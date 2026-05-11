import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-button',
  imports: [CommonModule, IconComponent],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() icon: string = 'add';
  @Input() variant: 'primary' | 'primary-hover' | 'primary-active' | 'secondary' | 'secondary-hover' | 'secondary-active' | 'disabled' | 'success' | 'warning' | 'error' = 'primary';
  @Input() showIcon: boolean = true;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (this.variant !== 'disabled') {
      this.clicked.emit();
    }
  }

  getIconColor(): string {
  const colorMap: {[key: string]: string} = {
    'primary': 'white',
    'primary-hover': 'white',
    'primary-active': 'white',
    'secondary': 'blue',
    'secondary-hover': 'blue',
    'secondary-active': 'blue',
    'disabled': 'disabled',
    'success': 'green',
    'warning': 'yellow',
    'error': 'red'
  };
  return colorMap[this.variant] || 'white';
}
}