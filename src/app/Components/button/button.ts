import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() variant: 'primary' | 'primary-hover' | 'primary-active' | 'secondary' | 'secondary-hover' | 'secondary-active' | 'disabled' | 'success' | 'warning' | 'error' = 'primary';
  @Input() showIcon: boolean = true;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (this.variant !== 'disabled') {
      this.clicked.emit();
    }
  }
}