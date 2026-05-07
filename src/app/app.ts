import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Label } from './Components/label/label';
import { ProgressBar } from './Components/progress-bar/progress-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Label, ProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DisenoDeInterfacesCLPTJCGF');
}
