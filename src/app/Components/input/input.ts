import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class InputComponent {
  isFocused: boolean = false;
  onFocus() { this.isFocused = true; }
  onBlur() { this.isFocused = false; }

  @Input() label: string = 'Text';
  @Input() placeholder: string = 'Placeholder';
  @Input() helperText: string = 'Helper Text';
  @Input() status: 'default' | 'focus' | 'success' | 'warning' | 'error' | 'disabled' = 'default';
  @Input() icon: string = 'edit';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
}