import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Label } from './Components/label/label';
import { ProgressBar } from './Components/progress-bar/progress-bar';
import { Badge } from './Components/badge/badge';
import { SearchBoxComponent } from './Components/search-box/search-box';
import { Card } from './Components/card/card';
import { ButtonComponent } from './Components/button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Label, ProgressBar,Badge, SearchBoxComponent, Card, ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DisenoDeInterfacesCLPTJCGF');
}
