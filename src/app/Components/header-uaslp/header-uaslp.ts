import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-header-uaslp',
  standalone: true,
  imports: [],
  templateUrl: './header-uaslp.html',
  styleUrl: './header-uaslp.css'
})
export class HeaderUaslp {
  @Input() logoSrc: string = '';
  @Input() universityName: string = 'UASLP';
  @Input() subtitle: string = 'Universidad Autónoma\nde San Luis Potosí';
}