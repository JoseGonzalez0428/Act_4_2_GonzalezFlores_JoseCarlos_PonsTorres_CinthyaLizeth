import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.css'
})
export class IconComponent {
  @Input() name: string = '';
  @Input() size: number = 20;
  @Input() color: string = 'currentColor';

  get iconSymbol(): string {
    const icons: { [key: string]: string } = {
      add: '+',
      edit: '✎',
      filter: '▽',
      download: '↓',
      arrow: '→',
      back: '←',
      info: 'i',
      close: '⊗',
      check: '✓',
      search: '⌕'
    };

    return icons[this.name] || '';
  }

  get iconColor(): string {
    const colors: { [key: string]: string } = {
      blue: 'var(--action-primary)',
      green: 'var(--status-success-text)',
      yellow: 'var(--status-warning-text)',
      red: 'var(--status-error-text)',
      disabled: 'var(--state-disabled)',
      white: 'var(--surface-primary)',
      currentColor: 'currentColor'
    };

    return colors[this.color] || this.color;
  }
}