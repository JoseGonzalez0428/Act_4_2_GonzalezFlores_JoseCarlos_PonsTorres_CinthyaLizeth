import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-label',
  standalone: true,
  imports: [],
  templateUrl: './label.html',
  styleUrl: './label.css'
})
export class Label {
  @Input() text: string = 'Label';
  @Input() percent: string = '';
  @Input() showInfo: boolean = true;
  @Input() showUnderline: boolean = true;

  @Input() variant: 'primary' | 'warning' | 'error' | 'disabled' = 'primary';

  get isDisabled(): boolean {
    return this.variant === 'disabled';
  }
}