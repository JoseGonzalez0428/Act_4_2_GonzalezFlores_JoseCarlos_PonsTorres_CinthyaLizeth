import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar';

@Component({
  selector: 'app-ui-card',
  standalone: true,
  imports: [ProgressBar],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title: string = 'Title';
  @Input() subtitle: string = 'Subtitle';
  @Input() description: string = 'Texto';
  @Input() progressLabel: string = 'Label';
  @Input() progressValue: number = 0;
  @Input() footerLabel: string = 'Label';
  @Input() buttonText: string = 'Button';

  @Input() variant: 'primary' | 'success' | 'warning' | 'error' = 'primary';

  @Output() footerClick = new EventEmitter<void>();

  get progressVariant(): 'primary' | 'success' | 'error' {
    if (this.variant === 'success') {
      return 'success';
    }

    if (this.variant === 'error') {
      return 'error';
    }

    return 'primary';
  }

  onFooterClick() {
    this.footerClick.emit();
  }
}
