import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-box',
  imports: [CommonModule],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css'
})
export class SearchBoxComponent {
  isActive: boolean = false;
  @Output() searchChange = new EventEmitter<string>();

  onFocus() { this.isActive = true; }
  onBlur() { this.isActive = false; }
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }
}