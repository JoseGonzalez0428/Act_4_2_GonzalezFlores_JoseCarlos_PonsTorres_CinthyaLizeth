import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.css'
})
export class IconComponent implements OnInit {
  @Input() name: string = '';
  @Input() size: number = 20;
  @Input() color: string = 'currentColor';
  cssFilter: string = '';

  private colorToFilter: {[key: string]: string} = {
    'blue': 'invert(15%) sepia(80%) saturate(1200%) hue-rotate(195deg) brightness(85%)',
    'green': 'invert(35%) sepia(60%) saturate(500%) hue-rotate(115deg)',
    'yellow': 'invert(40%) sepia(80%) saturate(600%) hue-rotate(10deg)',
    'red': 'invert(25%) sepia(90%) saturate(800%) hue-rotate(340deg)',
    'disabled': 'invert(80%) sepia(5%) saturate(200%) hue-rotate(180deg)',
    'white': 'brightness(0) invert(1)',
  };

  ngOnInit() {
    this.cssFilter = this.colorToFilter[this.color] || '';
  }
}