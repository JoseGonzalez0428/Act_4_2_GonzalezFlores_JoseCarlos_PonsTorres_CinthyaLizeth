import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-footer-uaslp',
  standalone: true,
  imports: [],
  templateUrl: './footer-uaslp.html',
  styleUrl: './footer-uaslp.css'
})
export class FooterUaslp {
  @Input() height: number = 50;
}