import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css'
})
export class ProgressBar {
  @Input() label: string = 'Label';
  @Input() value: number = 0;
  @Input() showInfo: boolean = true;
  @Input() showPercent: boolean = true;

  @Input() variant: 'primary' | 'success' | 'error' | 'disabled' = 'primary';

  get safeValue(): number {
    if (this.value < 0) {
      return 0;
    }

    if (this.value > 100) {
      return 100;
    }

    return this.value;
  }

  get isDisabled(): boolean {
    return this.variant === 'disabled';
  }
}